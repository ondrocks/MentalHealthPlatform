// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from 'react';

import * as classes from './dashboard.css';
import ResourcesPreview from './../ResourcesPreview/resources-preview';
import NewsPreview from './../NewsPreview/news-preview';
import CrisisPreview from './../CrisisPreview/crisis-preview';
import StatisticsPreview from './../StatisticsPreview/statistics-preview';
import TherapistsPreview from './../TherapistsPreview/therapists-preview';
import TrendingPostsPreview from './../TrendingPostsPreview/trending-posts-preview';
import TrendingKeywordsPreview from './../TrendingKeywordsPreview/trending-keywords-preview';
import UpcomingEventsPreview from './../UpcomingEventsPreview/upcoming-events-preview';

interface IDashboardProps {
}

const Tile = (props: any) => {
    return (
        <div className={classes.Tile}>
            {props.children}
        </div>
    );
}

const Dashboard = (props: IDashboardProps) => {
    const {
    } = props;

    return (
        <div className={classes.DashboardContainer}>
            <div className={classes.RowA}>
                <div className={classes.ColA}>
                    <Tile><ResourcesPreview /></Tile>
                </div>
                <div className={classes.ColB}>
                    <Tile><CrisisPreview /></Tile>
                </div>
                <div className={classes.ColC}>
                    <Tile><StatisticsPreview /></Tile>
                </div>
            </div>
            <div className={classes.RowB}>
                <div className={classes.ColA}>
                    <div className={classes.RowA}>
                        <Tile><NewsPreview /></Tile>
                    </div>
                    <div className={classes.RowA}>
                        <Tile><TherapistsPreview /></Tile>
                    </div>
                </div>
                <div className={classes.ColB}>
                    <div className={classes.RowA}>
                        <Tile><TrendingPostsPreview /></Tile>
                    </div>
                </div>
                <div className={classes.ColC}>
                    <div className={classes.RowA}>
                        <Tile><TrendingKeywordsPreview /></Tile>
                    </div>
                    <div className={classes.RowA}>
                        <Tile><UpcomingEventsPreview /></Tile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;