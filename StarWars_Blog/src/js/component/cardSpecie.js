import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const CardSpecie = props => 
{
	return (
		<div className="col-lg-4 col-12">
			<div className="card m-2 text-white bg-secondary ">
				{/* <img src={props.image} className="card-img-top" alt="..." /> */}
				<div className="card-header">
					<h3 className="card-title">{props.name}</h3>
				</div>
				<div className="card-body">
					<p className="card-text">
						<b>Language:</b> {props.language}
					</p>
					<p className="card-text">
						<b>Classification:</b> {props.classification}
					</p>
					<p className="card-text">
						<b>Average lifespan:</b> {props.average_lifespan}
					</p>
					<div className=" d-flex justify-content-between">
						<Link to={"/specie/" + props.index}>
							<a href="#" className="btn btn-danger">
								Learn more!
							</a>
						</Link>

						<a href="#" className="btn btn-dark text-white" onClick={props.function}>
							<i className={props.heart} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

CardSpecie.propTypes =
 {
	name: PropTypes.string,
	language: PropTypes.string,
	classification: PropTypes.string,
	average_lifespan: PropTypes.string,
	function: PropTypes.func,
	index: PropTypes.number,
	heart: PropTypes.string
};
