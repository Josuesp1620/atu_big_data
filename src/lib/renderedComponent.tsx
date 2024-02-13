import React from 'react';
import { Source, Layer } from 'react-map-gl';
import { v4 as uuidv4 } from 'uuid';

export function componentFactory(component) {
  switch (component.type) {
    case 'source':
      return (
        <Source key={`id-${component.props.name}-${uuidv4()}`} {...component.props}>
          {component.children.map((child) => (
            <Layer key={`id-${component.props.name}-${child.props.id}-${uuidv4()}`} {...child.props} />
          ))}
        </Source>
      );
    default:
      return null;
  }
}
