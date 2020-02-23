import React from 'react';
import CircleImage from '../CircleImage';
import Link from 'next/link';
import './styles.css';

function RowOfCircles({ acts, text }) {
    return (
        <React.Fragment>
            <div className="col-sm-12">
                <Link href="/acts">
                    <a className="flex-center flex-col white">
                        <h2 className="tpr__link padding-on">{text}</h2>
                        <div className="stack-photos flex-center">

                            <div className="flex-row">
                                <CircleImage
                                    src={acts[0].profilePicture}
                                />
                                <CircleImage
                                    src={acts[1].profilePicture}
                                />
                            </div>

                            <div className="flex-row">

                                <CircleImage
                                    src={acts[2].profilePicture}
                                />
                                <CircleImage
                                    src={acts[3].profilePicture}
                                />
                            </div>
                        </div>


                    </a>

                </Link>
            </div>
        </React.Fragment>
    )
}

export default RowOfCircles;