import * as React from 'react';
import { VictoryArea, VictoryChart, VictoryLegend, VictoryAxis, VictoryTooltip, VictoryLabel, VictoryTheme } from 'victory';


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

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''];
const daysOfYear = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];


const thing = {
    Jan: {
        firstDay: 1,
        label: 'Jan'
    },
    Feb: {
        firstDay: 32,
        label: 'Feb'
    },
    Mar: {
        firstDay: 60,
        label: 'Mar'
    },
    Apr: {
        firstDay: 91,
        label: 'Apr'
    },
    May: {
        firstDay: 121,
        label: 'May'
    },
    June: {
        firstDay: 152,
        label: 'June'
    },
    July: {
        firstDay: 182,
        label: 'July'
    },
    Aug: {
        firstDay: 213,
        label: 'Aug'
    },
    Sept: {
        firstDay: 244,
        label: 'Sept'
    },
    Oct: {
        firstDay: 274,
        label: 'Oct'
    },
    Nov: {
        firstDay: 305,
        label: 'Nov'
    },
    Dec: {
        firstDay: 335,
        label: 'Dec'
    },
    end: {
        firstDay: 366,
        label: ''
    }
};

export default class InteractiveLegend extends React.Component {
    series;

    constructor(props) {
        super(props);
        this.state = { hiddenSeries: new Set() };
        this.series = props.series;
    }

    buildEvents() {
        return this.series.map((_, idx) => {
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
        console.error(Object.keys(thing))

        return (
            <div>
                <VictoryChart
                    height={200}
                    events={this.buildEvents()}
                // domain={{x: [0, 365], y: [0, 200]}}
                >
                    <VictoryAxis
                      style={{
                        grid: { stroke: "#818e99", strokeWidth: 0.5 },
                      }}                    
                        tickValues={Object.values(thing).map(({firstDay}) => firstDay)}
                        tickFormat={(day) => Object.values(thing).find(({firstDay}) => firstDay === day).label}
                    />
                    <VictoryAxis 
                      style={{
                        grid: { stroke: "#818e99", strokeWidth: 0.5 },
                      }}
                    dependentAxis={true} tickFormat={(snow) => `${snow}cm`}/>
                    {this.series.map((s, idx) => {
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
                        itemsPerRow={5}
                        name={'legend'}
                        data={this.series.map((s, idx) => {
                            const item = toVictoryLegend(s);
                            if (this.state.hiddenSeries.has(idx)) {
                                return { ...item, symbol: { fill: '#999' } };
                            }
                            return item;
                        })}
                        height={10}
                    />
                </VictoryChart>
            </div>
        );
    }
}
