# GitHub Actions & Netlify Deployment Setup

This guide will help you set up automated testing and deployment for Raven.

## 🔧 GitHub Actions Setup

Two workflows are configured:

### 1. **test.yml** - Automated Testing
- ✅ Runs automatically on every push and pull request
- ✅ Tests on Node.js 18.x and 20.x
- ✅ No secrets required - works out of the box!

### 2. **deploy.yml** - Netlify Deployment (Optional)
- Automatically deploys to Netlify on push to main/master branch
- Requires GitHub secrets configuration (see below)

## 🔐 Setting Up GitHub Secrets for Netlify Auto-Deploy

If you want automatic Netlify deployments via GitHub Actions, follow these steps:

### Step 1: Get Your Netlify Credentials

1. **Get Netlify Auth Token:**
   - Go to https://app.netlify.com/user/applications
   - Click "New access token"
   - Give it a name (e.g., "GitHub Actions")
   - Copy the token (you won't see it again!)

2. **Get Netlify Site ID:**
   - Go to your site in Netlify
   - Go to Site settings → General
   - Copy the "Site ID" (under "Site information")

### Step 2: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these two secrets:

   **Secret 1:**
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: [paste your Netlify auth token]

   **Secret 2:**
   - Name: `NETLIFY_SITE_ID`
   - Value: [paste your Netlify site ID]

### Step 3: Push to GitHub

Once secrets are configured, every push to `main` or `master` will:
1. ✅ Run all tests
2. ✅ Build the project
3. ✅ Deploy to Netlify automatically

## 🌐 Manual Netlify Deployment (Recommended for First Deploy)

If you prefer to deploy manually via Netlify website:

1. **Go to Netlify** → "Add new site" → "Import an existing project"
2. **Connect your GitHub repository**
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
4. **Click "Deploy site"**

The `netlify.toml` file will automatically configure everything else!

## 📊 Viewing Test Results

After pushing to GitHub:
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Click on any workflow run to see test results
4. Download test artifacts if needed

## 🎯 What Runs When

| Event | Tests Run? | Deploy? |
|-------|-----------|---------|
| Push to any branch | ✅ Yes | ❌ No |
| Pull request | ✅ Yes | ❌ No |
| Push to main/master | ✅ Yes | ✅ Yes (if secrets configured) |

## 🚨 Troubleshooting

**Tests failing?**
- Check the Actions tab for detailed error logs
- Run `npm test` locally to debug

**Deployment failing?**
- Verify GitHub secrets are set correctly
- Check that Netlify site ID matches your site
- Ensure auth token has proper permissions

**Want to disable auto-deploy?**
- Simply don't add the GitHub secrets
- Tests will still run automatically
- Deploy manually via Netlify website

## 📝 Notes

- The test workflow runs on both Node 18 and 20 to ensure compatibility
- Coverage reports are uploaded to Codecov (optional, requires Codecov account)
- Build artifacts are saved for 90 days by default
- You can always deploy manually via Netlify CLI or website
