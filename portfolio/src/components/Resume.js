import '../App.css';


export default function Resume() {
    const onBtnClick = () => {
        fetch('techsupres1.pdf')
            .then(response => response.blob())
            .then(blob => {
                const Url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = Url;
                link.download = 'techsupres1.pdf';
                link.click();
                window.URL.revokeObjectURL(Url);
            })
            .catch(error => {
                console.error('Failed to download the file:', error);
            })

    }
    return (
        <div class="resumeEdit bg-warning p-2 text-dark bg-opacity-25">
            <iframe
                src={require(`../assets/techsupres1.pdf`)}
                title="Resume"
                className="resume1"
            />
            <br>
            </br>
            <button className="resume btn btn-primary btn-lg" type="button" onClick={onBtnClick}>Download my Resume</button>
        </div>
    )
};