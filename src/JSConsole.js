import resumeText from "./assets/Resume.txt";
import resumePdf from "./assets/Resume.pdf";


export default (global.Taylor || (global.Taylor = new Taylor()));


function Taylor() {
  setTimeout(() => {
    console.log("Hey, welcome to the JavaScript console. I've left a global here.");
    console.log("Try typing 'Taylor'")
  }, 1000);

  this.showResume = async function getResume(type = "text") {
    const resume = await ({
      text: handleResumeText,
      pdf: handleResumePdf,
    })[type]();
    console.log(resume);
  }

  this.downloadResume = async function downloadResume(type = "pdf") {
    const resume = await ({
      text: handleResumeDownloadText,
      pdf: handleResumeDownloadPdf,
    })[type]();
  }

  this.startEmail = function(body = "If this was a scavenger hunt, I found the thing.") {
    const subject = "7334 user found this link";
    const email = "tay.stack+console_7334_auto@gmail.com";
    const link = `mailto:${email}?subject=${subject}?body=${body}`;
    window.open(link, "_blank");
  };

  async function handleResumeText() {
    const response = await fetch(resumeText);
    return response.text();
  }

  async function handleResumePdf() {
    const response = await fetch(resumePdf);
    return response.text();
  }

  async function handleResumeDownloadText() {
    initDownload(resumeText);
  }

  async function handleResumeDownloadPdf() {
    initDownload(resumePdf);
  }

  function initDownload(source) {
    const aTag = document.createElement("a");
    aTag.href = source;
    aTag.setAttribute("href", source);
    aTag.setAttribute("target", "_blank");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
}
