

function ConvartMediaToBase64(e, file, setfile) {
    const datafile = e.target.files[0];
    const filereacder = new FileReader();
    filereacder.onload = (event) => {
        setfile([...file, event.target.result])
    }
    filereacder.readAsDataURL(datafile);
}



export default ConvartMediaToBase64;