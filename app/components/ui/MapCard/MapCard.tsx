import { FC } from 'react';
import { Map, YMaps } from 'react-yandex-maps';

const containerStyle = {
	width: '1000px',
	height: '650px'
};

const center = [60.317024, 30.445971];
const zoom = 18;

const MapCard: FC = () => (
	<YMaps>
		<Map
			defaultState={{ center, zoom }}
			height={containerStyle.height}
			width={containerStyle.width}
		/>
	</YMaps>
);

export default MapCard;
