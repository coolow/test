async function main() {
    navigator.geolocation.getCurrentPosition(position=>alert(`${position.coords.longitude}, ${position.coords.latitude}`),(err)=>alert(err.message))
}

main()