# Live Demo of RNA-Seq Plots

Welcome to the live demo of RNA-Seq Plots, a collection of React.js components designed to visualize RNA sequencing data. This demo showcases the functionality of the Volcano Plot and Principal Component Analysis (PCA) plot components, both powered by Highcharts.

For more information on the components and how to use them, refer to the [Plot Package Documentation](https://github.com/cedekpoole/rna-seq-plots).

## Accessing the Demo

You can access the live demo through the following URL:

[View the Live Demo](https://plot-package-test.netlify.app/)

This demo is hosted on Netlify and is configured to demonstrate the capabilities of the plotting tools with example datasets.


## How to Use the Demo

### Navigation
- Upon landing on the demo page, you will see navigation options to switch between the different plots available.
- Select the plot type you wish to view from the landing page.

### Uploading Data
- To upload data, place it in the available input fields for each plot section.
- Follow the prompts to upload your CSV file and ensure it matches the format specified in the [Sample Data Usage](#sample-data-usage) section.

### Sample Data Usage

Several CSV files are provided so that that you can download and then upload directly into the input fields of this application. This will help you to test the functionalities of the plots with well-structured data.

### Downloading the Data

To download the data, navigate to the `examples/data` folder in [this repository](https://github.com/cedekpoole/rna-seq-plots). Here you will find the following CSV files:

- **Volcano Plot Data (`volcano-plot/volcano_plot_input.csv`)**: Used for generating volcano plots. [Download this file here](https://github.com/cedekpoole/rna-seq-plots/blob/main/examples/data/volcano-plot/volcano_plot_input.csv).
- **Sample Data File (`pca-plot/sample_vsd_counts.csv`)**: Used in the 'upload your data file' input of the PCA plot. [Download this file here](https://github.com/cedekpoole/rna-seq-plots/blob/main/examples/data/pca-plot/sample_vsd_counts.csv).
- **Experimental Condition File (`pca-plot/design_table.csv`)**: Used as the 'experimental condition file' input for the PCA plot. [Download this file here](https://github.com/cedekpoole/rna-seq-plots/blob/main/examples/data/pca-plot/design_table.csv).

### How to Upload the Data

After downloading the CSV files, follow these steps to upload them into the application:

1. **Open the Application**: Go to the [live demo site](https://plot-package-test.netlify.app/).
2. **Navigate to the Upload Section**: For each plot type, locate the corresponding input field.
3. **Upload the Files**:
   - For the Volcano Plot, use the `volcano_plot_input.csv`.
   - For the PCA Plot, upload `sample_vsd_counts.csv` into the 'upload your data file' input and `design_table.csv` into the 'experimental condition file' input. 