import * as React from 'react';
import { VictoryArea, VictoryChart, VictoryLegend, VictoryAxis } from 'victory';


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

export default class InteractiveLegend extends React.Component {
    series;

    constructor(props) {
        super(props);
        this.state = { hiddenSeries: new Set() };
        this.series = [
            {
                name: 'cats',
                color: '#c33',
                datapoints: [{ x: 0, y: 5 }, { x: 1, y: 8 }, { x: 2, y: 5 }]
            },
            {
                name: 'dogs',
                color: '#3c3',
                datapoints: [{ x: 0, y: 2 }, { x: 1, y: 4 }, { x: 2, y: 6 }]
            },
            {
                name: 'birds',
                color: '#33c',
                datapoints: [{ x: 0, y: 3 }, { x: 1, y: 1 }, { x: 2, y: 3 }]
            }
        ];
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
        return (
            <div>
                <VictoryChart
                    height={200}
                    events={this.buildEvents()}
                >
                    <VictoryAxis />
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
                        name={'legend'}
                        data={this.series.map((s, idx) => {
                            const item = toVictoryLegend(s);
                            if (this.state.hiddenSeries.has(idx)) {
                                return { ...item, symbol: { fill: '#999' } };
                            }
                            return item;
                        })}
                        height={90}
                    />
                </VictoryChart>
            </div>
        );
    }
}
