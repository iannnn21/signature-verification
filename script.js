document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("signatureFile").files[0];
    if (!fileInput) {
        alert("Please upload a signature image.");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput);

    try {
        const response = await fetch("https://your-api-url/predict", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        document.getElementById("result").innerText = `Result: ${data.result}`;
    } catch (error) {
        console.error("Error:", error);
    }
});
