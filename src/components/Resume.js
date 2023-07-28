import '../style/style.css';


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
        <div className="resumeEdit p-2 text-dark">
            <br />
            <button className="resume btn btn-primary btn-lg" type="button" onClick={onBtnClick}>Download my Resume</button>
        </div>
    )
};