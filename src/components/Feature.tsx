import React, { FC } from "react";

type FeatureProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

/**
 * A component that can be reused to display the features of the application.
 * @param { string } imageSrc image of the feature
 * @param { string } imageAlt image description
 * @param { string } title Title of the feature
 * @param { string } description description of the feature
 */
const Feature: FC<FeatureProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}: FeatureProps) => {
  return (
    <div className="item">
      <img src={imageSrc} alt={imageAlt} className="item_icon" />
      <h3 className="item_title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
