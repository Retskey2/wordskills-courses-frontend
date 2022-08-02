import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { FC, memo, useCallback, useState } from 'react'

const containerStyle = {
	width: '1000px',
	height: '650px',
}

const center = {
	lat: 60.317024,
	lng: 30.445971,
}

const GoogleCard: FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyAiWiM2YlT6NVEvwLTcaNKD62RT6IHvb24',
	})

	const [map, setMap] = useState(null)

	const onLoad = useCallback(function callback(map: any) {
		const bounds = new window.google.maps.LatLngBounds(center)
		map.fitBounds(bounds)
		setMap(map)
	}, [])

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null)
	}, [])

	return isLoaded ? (
		<div className="mt-10">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={12}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</div>
	) : (
		<></>
	)
}

export default memo(GoogleCard)
