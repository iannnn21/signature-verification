document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("signatureFile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a file!");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        document.getElementById("result").innerHTML = `<p>Signature is ${data.result}.</p>`;
    } catch (error) {
        alert("Error verifying signature.");
    }
});
