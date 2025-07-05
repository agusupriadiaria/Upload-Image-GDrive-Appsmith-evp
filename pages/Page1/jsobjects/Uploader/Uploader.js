export default {
	uploadSingleFile: () => {
		const file = FilePicker1.files[0];

		if (!file || !file.data) {
			showAlert("No file selected", "error");
			return;
		}

		const base64 = file.data.split(",")[1];

		return UploadApi.run({
			contents: base64,
			type: file.type
		});
	}
}