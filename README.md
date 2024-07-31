# AutoGenius

Problem Statement : 3.2.1.7 Generative AI solutions for developing proposals based on customer requirements – AI tools for generating customized proposals tailored to customer demands.

We have developed a car recommendation system designed to provide personalized recommendations tailored to the specific requirements of each customer. This system utilizes advanced algorithms to analyze customer preferences, vehicle specifications, and other relevant factors to deliver optimal recommendations. By considering factors such as budget, desired features, performance metrics, and user feedback, our system aims to assist customers in selecting the most suitable car that aligns with their individual needs and preferences.

## Installation

This README provides instructions for installing and running the AutoGenius Flask application, which utilizes the Gemini API for personalized car recommendations. The application is designed to be hosted on Azure Web Hosting.

### Prerequisites

- Python 3.8+: Ensure Python is installed on your system.
- Azure Account: You need an Azure account for deployment.
- Git: For cloning the repository (optional but recommended).

### Setup Instructions

1. Clone the Repository

   If you haven’t already cloned the repository, you can do so using Git:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Create a Virtual Environment

   It is recommended to use a virtual environment to manage dependencies. Create and activate a virtual environment with the following commands:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install Dependencies

   Install the required Python packages using `pip`:

   ```bash
   pip install -r requirements.txt
   ```

4. Configuration

   Create a configuration file `.env` in the root directory of the project with the following contents:

   ```env
   FLASK_APP=app.py
   FLASK_ENV=development
   GEMINI_API_KEY=your_gemini_api_key
   ```

   Replace `your_gemini_api_key` with your actual Gemini API key.

5. Run the Flask Application Locally

   To run the Flask application locally, use the following command:

   ```bash
   flask run
   ```

   The application should be accessible at `http://127.0.0.1:5000`.

### Deployment to Azure Web Hosting

1. Prepare Your Azure Environment

   - Sign in to the [Azure Portal](https://portal.azure.com).
   - Create a new App Service if you don’t have one. Navigate to App Services and click Add.

2. Deploy Your Application

   - Navigate to your App Service and go to the Deployment Center.
   - Choose the deployment source. You can use Local Git, GitHub, Bitbucket, or Azure Repos.
   - Follow the prompts to configure the deployment.

3. Configure Application Settings

   - In your App Service, go to Configuration under Settings.
   - Add the necessary environment variables, such as `GEMINI_API_KEY`, with their respective values.

4. Deploy the Application

   After configuring the deployment source and application settings, deploy the application. Azure will handle the deployment process.

5. Verify Deployment

   Once the deployment is complete, navigate to the URL provided by Azure for your App Service. Your Flask application should be live and accessible.

### Troubleshooting

- Ensure Python Version Compatibility: Make sure you are using a compatible version of Python as specified in the `requirements.txt`.
- Check Logs: For deployment issues, check the logs in the Azure Portal under Log Stream.
- Environment Variables: Ensure all necessary environment variables are correctly set in Azure.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Developer

*	[Abhineet Raj](https://github.com/abhineetraj1)