import React, {Component} from 'react'


class WorkExperience extends Component {
    render() {
        return (
            <div className="WorkExperience Section">
                <h3 className="SectionTitle">Work experience</h3>

                <div className="MainSection">
                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">Internship at Foobla</div>
                            <div className="TimeRange">July, 2015 - March, 2017</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                Learning and developing some themes and plugins for products of Foobla, which are sold
                                on
                                Envato.
                            </div>
                        </div>
                    </div>

                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">Software Engineer at Foobla</div>
                            <div className="TimeRange">March, 2017 - May, 2020</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                Designing system and developing strategic projects on data analysis of e-commerce
                                platforms.
                            </div>
                        </div>
                    </div>

                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">
                                <a href="https://uetcodecamp.github.io" rel="noreferrer" target="_blank">
                                    Co-founder and mentor at UET Code Camp
                                </a>
                            </div>
                            <div className="TimeRange">February, 2018 - July, 2019</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                Building some tech courses and sharing them to students at UET.
                            </div>
                        </div>
                    </div>

                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">Solution Architect at Merchize (renamed from Foobla)</div>
                            <div className="TimeRange">June, 2020 - July, 2022</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                Providing solutions and designing system for Merchize Platform - an e-commerce platform
                                for
                                print-on-demand.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default WorkExperience
