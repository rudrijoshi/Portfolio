export default function Resume() {
    const onBtnClick = () => {
        fetch('tech.pdf').then(response => {
            response.blob().then(blob => {
                const Url = window.URL.createObjectURL(blob);
                let link = document.createElement('a');
                link.href = Url;
                link.download = 'tech.pdf';
                link.click();
            })
        })
    }
    return (
        <div>
            <iframe
                src={require(`../assets/techsupres1.pdf`)}
                title="Resume"
                className="resume"
            />
            <button className="resume" onClick={onBtnClick}>Download my Resume</button>
        </div>
    )
};