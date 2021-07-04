import * as React from 'react';
import { VictoryArea, VictoryChart, VictoryLegend, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip } from 'victory';


const toVictoryData = (line) => {
    return line.datapoints.map(dp => ({
        name: line.name,
        x: dp.x,
        y: dp.y
    }));
};

const toVictoryLegend = (line) => {
    return line.color ? {
        name: line.name,
        symbol: {
            fill: line.color
        }
    } : { name: line.name };
};

const months = [
    { firstDay: 1, south: "Jan", north: "July", both: "Jan/\nJuly" },
    { firstDay: 32, south: "Feb", north: "Aug", both: "Feb/\nAug" },
    { firstDay: 60, south: "Mar", north: "Sept", both: "Mar/\nSept" },
    { firstDay: 91, south: "Apr", north: "Oct", both: "Apr/\nOct" },
    { firstDay: 121, south: "May", north: "Nov", both: "May/\nNov" },
    { firstDay: 152, south: "June", north: "Dec", both: "June/\nDec" },
    { firstDay: 182, south: "July", north: "Jan", both: "July/\nJan" },
    { firstDay: 213, south: "Aug", north: "Feb", both: "Aug/\nFeb" },
    { firstDay: 244, south: "Sept", north: "Mar", both: "Sept/\nMar" },
    { firstDay: 274, south: "Oct", north: "Apr", both: "Oct/\nApr" },
    { firstDay: 305, south: "Nov", north: "May", both: "Nov/\nMay" },
    { firstDay: 335, south: "Dec", north: "June", both: "Dec/\nJune" },
    { firstDay: 366, south: "", north: "", both: "" },
];

export default class InteractiveLegend extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hiddenSeries: new Set() };
    }

    buildEvents() {
        return this.props.series.map((_, idx) => {
            return {
                childName: ['legend'],
                target: ['data', 'labels'],
                eventKey: String(idx),
                eventHandlers: {
                    onClick: () => {
                        return [
                            {
                                childName: ['area-' + idx],
                                target: 'data',
                                eventKey: 'all',
                                mutation: () => {
                                    if (!this.state.hiddenSeries.delete(idx)) {
                                        // Was not already hidden => add to set
                                        this.state.hiddenSeries.add(idx);
                                    }
                                    this.setState({ hiddenSeries: new Set(this.state.hiddenSeries) });
                                    return null;
                                }
                            }
                        ];
                    },
                    onMouseOver: () => {
                        return [
                            {
                                childName: ['area-' + idx],
                                target: 'data',
                                eventKey: 'all',
                                mutation: props => {
                                    return {
                                        style: { ...props.style, strokeWidth: 4, fillOpacity: 0.5 }
                                    };
                                }
                            }
                        ];
                    },
                    onMouseOut: () => {
                        return [
                            {
                                childName: ['area-' + idx],
                                target: 'data',
                                eventKey: 'all',
                                mutation: () => {
                                    return null;
                                }
                            }
                        ];
                    }
                }
            };
        });
    }

    render() {

        return (
            <div>
                <VictoryChart
                    height={200}
                    events={this.buildEvents()}
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum: { y } }) => `${y}cm`}
                            radius={5}
                            labelComponent={<VictoryTooltip
                                centerOffset={{ x: 5 }}
                                style={{ fontSize: '6px' }}
                            />}
                        />
                    }
                // domain={{ x: [1, 365], y: [0, 350] }}
                >
                    <VictoryAxis
                        style={{
                            grid: { stroke: "#818e99", strokeWidth: 0.5 },
                            tickLabels: { fontSize: 8 },
                        }}
                        tickValues={months.map(({ firstDay }) => firstDay)}
                        tickFormat={(day) => {
                            const month = months.find(({ firstDay }) => firstDay === day);
                            return month[this.props.monthDisplay];
                        }}
                    />
                    <VictoryAxis
                        style={{
                            grid: { stroke: "#818e99", strokeWidth: 0.5 },
                            tickLabels: { fontSize: 8 },
                        }}
                        dependentAxis={true} tickFormat={(snow) => `${snow}cm`}

                    />
                    {this.props.series.map((s, idx) => {
                        if (this.state.hiddenSeries.has(idx)) {
                            return undefined;
                        }
                        return (
                            <VictoryArea
                                key={'area-' + idx}
                                name={'area-' + idx}
                                data={toVictoryData(s)}
                                style={{
                                    data: {
                                        fill: s.color,
                                        fillOpacity: 0.2,
                                        stroke: s.color,
                                        strokeWidth: 2
                                    }
                                }}
                            />
                        );
                    })}
                    <VictoryLegend
                        orientation='horizontal'
                        itemsPerRow={6}
                        name={'legend'}
                        data={this.props.series.map((s, idx) => {
                            const item = toVictoryLegend(s);
                            if (this.state.hiddenSeries.has(idx)) {
                                return { ...item, symbol: { fill: '#999' } };
                            }
                            return item;
                        })}
                        height={10}
                        style={{
                            labels: { fontSize: 8, cursor: 'pointer' }
                        }}
                    />
                </VictoryChart>
            </div>
        );
    }
}
