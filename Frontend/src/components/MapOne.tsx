import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/css/jsvectormap.css';
import { useEffect } from 'react';
import '../js/us-aea-en';
import '../js/world';

const MapOne = () => {
  useEffect(() => {
    var map = new jsVectorMap({
    selector: "#map",
    map: "world",
    markers: [
      { name: 'Egypt', coords: [26.8206, 30.8025] },
      { name: 'United Kingdom', coords: [55.3781, 3.4360] },
      {
        name: 'United States',
        coords: [37.0902, -95.7129],
        // Add style for this particular marker
        // Keep in mind `style` object is merged with `markerStyle.initial`
        style: { fill: 'red' }
      },
      { name: 'Australia', coords: [-26.4391, 133.2813] }
    ],
    selectedMarkers: [3]
});
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        World Map
      </h4>
      <div id="map" className="mapOne map-btn h-90"></div>
    </div>
  );
};

export default MapOne;
