import { YMaps, Map } from "react-yandex-maps"; import { FC, memo, useCallback, useState } from 'react'


const containerStyle = {
	width: '1000px',
	height: '650px',
}

const center = [
	60.317024,
	30.445971,
]
const zoom = 18

const MapCard: FC = () => {
	return (<YMaps>
		<Map defaultState={{ center, zoom }} height={containerStyle.height} width={containerStyle.width} />
	</YMaps>)
}

export default MapCard