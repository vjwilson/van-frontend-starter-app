import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';
import './sample-page.scss';

import { PageHeader } from '@red-hat-insights/insights-frontend-components';
import { PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';
import { Section } from '@red-hat-insights/insights-frontend-components';

import { Button } from '@patternfly/react-core';

// const SampleComponent = asyncComponent(() => import('../../PresentationalComponents/SampleComponent/sample-component'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

class SamplePage extends Component {

    render() {
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Sample Dashboard'/>
                </PageHeader>
                <Section type='content'>
                    <div className="pf-c-alert pf-m-info" aria-label="Information Notification">
                        <div aria-hidden="true" className="pf-c-alert__icon">
                            <i className="fas fa-info-circle"/>
                        </div>
                        <div className="pf-c-alert__body">
                            <h4 className="pf-c-alert__title">
                                <span className="sr-only">Info: </span> You have successfully cloned the starter application
                            </h4>
                        </div>
                    </div>
                    <section className='splitcards'>
                        <div className="pf-c-card">
                            <div className="pf-c-card__header"> Latest </div>
                            <div className="pf-c-card__body">
                                <b>You Control Your Data</b>
                                <p>Check out the third installment in Amaya's series of blog posts about getting to know the various features of Red Hat Insights. 
                                    Her latest blog post discusses data security with Red Hat Insights. 
                                    Learn how to take control of analytics data used to determine vulnerabilities and risks.</p>
                            </div>
                            <div className="pf-c-card__footer pull-right">
                                <a> More </a> 
                            </div>
                        </div>
                        <div className="pf-c-card">
                            <div className="pf-c-card__header"> Newest Systems </div>
                            <div className="pf-c-card__body">
                                <table>
                                    <thead>
                                        <tr>
                                            <th> System</th>
                                            <th> Registration Date </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ip-172-31-4-156.us-west-2.compute.internal</td>
                                            <td>8 Hours ago</td>
                                        </tr>
                                        <tr>
                                            <td>ip-172-31-10-232.us-west-2.compute.internal</td>
                                            <td>8 Hours ago</td>
                                        </tr>
                                        <tr>
                                            <td>ip-172-31-15-171.us-west-2.compute.internal</td>
                                            <td>8 Hours ago</td>
                                        </tr>
                                        <tr>
                                            <td>ip-172-31-13-239.us-west-2.compute.internal</td>
                                            <td>10 Hours ago</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <div className="pf-c-card">
                            <div className="pf-c-card__header"> Patternfly 4 Integration</div>
                            <div className="pf-c-card__body">
                                <Section type='button-group'>
                                    <Button variant='primary'> PF-Next Primary Button </Button>
                                    <Button variant='secondary'> PF-Next Secondary Button </Button>
                                    <Button variant='tertiary'> PF-Next Tertiary Button </Button>
                                    <Button variant='danger'> PF-Next Danger Button </Button>
                                </Section>
                            </div>
                        </div>
                    
                </Section>
            </React.Fragment>
        );
    }
}

export default withRouter(SamplePage);
