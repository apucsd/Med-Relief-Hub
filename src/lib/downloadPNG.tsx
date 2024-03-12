import html2canvas from "html2canvas";
import { toast } from "sonner";

export const downLoadPNG = (target: string) => {
  const targetElement = document.getElementById(target);
  console.log(targetElement, "target", target);

  if (targetElement?.innerHTML) {
    // Check if targetElement is not null
    html2canvas(targetElement, {
      useCORS: true,
      onclone: () => {
        toast.success("Your file is downloaded");
      },
    }).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");

      // Create a download link and trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "med-relief-hub";
      downloadLink.click();
    });
  } else {
    console.error(`Element with ID '${target}' not found.`);
  }
};
