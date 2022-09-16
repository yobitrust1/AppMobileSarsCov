import * as React from 'react';
import { ChartDataPoint, Label, Box, XYValue } from './types';
declare type Props = {
    theme?: {
        label?: Label;
        box?: Box;
        formatter?: (value: ChartDataPoint) => string;
    };
    value?: ChartDataPoint;
    position?: XYValue;
};
declare const BoxTooltip: React.FC<Props>;
export { BoxTooltip };
