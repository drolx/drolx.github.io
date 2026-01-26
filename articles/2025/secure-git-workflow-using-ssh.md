---
title: "Secure git workflow using ssh"
description: "Secure Your Workflow by Mastering Git with SSH"
publishedAt: "Jul 03 2025"
author: "Godwin Peter .O"
heroImage: "/images/placeholder.webp"
tags: "technology, git, ssh, github"
---

In the world of version control, speed and security aren't just "nice-to-haves"—they are the bedrock of a professional development environment. While HTTPS is often the default for beginners, **SSH (Secure Shell)** is the industry standard for developers who prioritize seamless automation and robust protection.

By using SSH, you establish a cryptographically secure connection between your local machine and your remote repository, eliminating the need to constantly re-enter your credentials.

---

### Why Choose SSH Over HTTPS?

Transitioning to SSH offers two primary advantages that significantly improve your daily dev cycle:

- **Effortless Interaction:** Once configured, you no longer need to type your username or personal access token (PAT) for every `push` or `pull`. It’s a "set it and forget it" workflow.
- **Enhanced Security:** SSH relies on asymmetric encryption. Your **private key** stays on your machine and is never transmitted over the network, making it significantly harder for attackers to intercept your credentials compared to password-based systems.

---

### Step 1: Generate Your SSH Key Pair

The first step is to create a unique digital identity for your machine. We use the **Ed25519** algorithm, which is currently recommended for its superior security and performance.

1. Open your terminal.
2. Run the following command:
   `ssh-keygen -t ed25519 -C "your_email@example.com"`
3. When prompted to "Enter a file in which to save the key," press **Enter** to accept the default location.
4. **Optional but recommended:** Enter a passphrase for an extra layer of security.

---

### Step 2: Add Your Public Key to Your Git Provider

To establish the handshake, you must give your **public key** to your hosting service. While **GitHub** is the most common choice, this process is nearly identical for **GitLab**, **Bitbucket**, or self-hosted **Gitea** instances.

1. Copy your public key to your clipboard:

- **macOS:** `pbcopy < ~/.ssh/id_ed25519.pub`
- **Windows (PowerShell):** `Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard`
- **Linux:** `cat ~/.ssh/id_ed25519.pub`

2. Navigate to your provider's **Settings** > **SSH and GPG keys**.
3. Click **New SSH Key**, give it a descriptive title (e.g., "Work Laptop"), and paste the content.

---

### Step 3: Local Git Configuration

To ensure your commits are correctly attributed, verify that your local Git identity matches the one associated with your SSH key.

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"

```

If you are switching an existing repository from HTTPS to SSH, you will need to update the remote URL:

```bash
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git

```

---

### Verifying the Connection

Before you start pushing code, run a quick test to ensure the handshake is working:

`ssh -T git@github.com`

If successful, you’ll receive a greeting: _"Hi [Username]! You've successfully authenticated..."_ From this point forward, your interaction with the remote server is encrypted, authenticated, and—best of all—automatic.
