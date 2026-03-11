// ============================================================
// firebase-config.js — AgentPrep 52
// ⚠️  BEFORE LAUNCH: Fill in all PASTE_YOUR_* values below
// ============================================================
//
// ── STEP 1: FIREBASE ────────────────────────────────────────
// 1. Go to https://console.firebase.google.com
// 2. Click "Add project" → name it "agentprep52" → Create
// 3. Project Overview → click </> Web icon → Register app → name it "agentprep52-web"
// 4. Copy the firebaseConfig values into the object below
// 5. Authentication → Get Started → Sign-in method → Enable:
//    • Email/Password  (required)
//    • Google          (recommended)
// 6. Firestore Database → Create database → Start in production mode
//    Add this security rule:
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /users/{userId}/{document=**} {
//          allow read, write: if request.auth != null && request.auth.uid == userId;
//        }
//      }
//    }

const FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_apiKey_HERE",
  authDomain:        "PASTE_YOUR_authDomain_HERE",
  projectId:         "PASTE_YOUR_projectId_HERE",
  storageBucket:     "PASTE_YOUR_storageBucket_HERE",
  messagingSenderId: "PASTE_YOUR_messagingSenderId_HERE",
  appId:             "PASTE_YOUR_appId_HERE"
};

// ── STEP 2: STRIPE ───────────────────────────────────────────
// 1. Go to https://stripe.com → Create free account
// 2. Dashboard → Developers → API keys → copy "Publishable key" (pk_live_...)
// 3. Products → Add product:
//    • "AgentPrep 52 Premium"    → $14.99/month recurring
//    • "AgentPrep 52 AI Premium" → $24.99/month recurring
// 4. Payment Links → Create a payment link for each product
//    For success_url: set it to https://yourdomain.com/?tier=premium&paid=1
//    (the app handles this automatically via goToPremium())
// 5. Paste the payment link URLs below (format: https://buy.stripe.com/...)

const STRIPE_CONFIG = {
  publishableKey: "PASTE_YOUR_STRIPE_PUBLISHABLE_KEY_HERE",

  // Payment Links (Stripe Dashboard → Payment Links → Create)
  premiumMonthlyLink:   "PASTE_YOUR_PREMIUM_14.99_PAYMENT_LINK_HERE",
  aiPremiumMonthlyLink: "PASTE_YOUR_AI_PREMIUM_24.99_PAYMENT_LINK_HERE",

  // Prices (display only — Stripe enforces the real price server-side)
  premiumPrice:   14.99,
  aiPremiumPrice: 24.99,
};

// ── STEP 3: ANTHROPIC (AI TUTOR) ────────────────────────────
//
// ⚠️  SECURITY WARNING: Never put your real API key directly here
//     in a production app. It will be visible to anyone who views
//     your page source. Use the Cloudflare Worker proxy instead.
//
// ── OPTION A: Cloudflare Worker Proxy (RECOMMENDED for launch) ──
// 1. Go to https://workers.cloudflare.com → Create Worker
// 2. Paste this code into the worker:
//
//    export default {
//      async fetch(request, env) {
//        if (request.method === 'OPTIONS') {
//          return new Response(null, { headers: {
//            'Access-Control-Allow-Origin': '*',
//            'Access-Control-Allow-Headers': 'Content-Type',
//            'Access-Control-Allow-Methods': 'POST'
//          }});
//        }
//        const body = await request.json();
//        const resp = await fetch('https://api.anthropic.com/v1/messages', {
//          method: 'POST',
//          headers: {
//            'x-api-key': env.ANTHROPIC_KEY,
//            'anthropic-version': '2023-06-01',
//            'content-type': 'application/json'
//          },
//          body: JSON.stringify(body)
//        });
//        const data = await resp.json();
//        return new Response(JSON.stringify(data), {
//          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
//        });
//      }
//    }
//
// 3. Settings → Variables → Add secret: ANTHROPIC_KEY = your key
// 4. Copy your Worker URL (e.g. https://agentprep-proxy.yourname.workers.dev)
// 5. Paste it as proxyUrl below and set apiKey to null
//
// ── OPTION B: Direct key (TESTING ONLY — not for production) ───
// Paste your key from https://console.anthropic.com → API Keys
// This works immediately but your key is visible in page source.

const ANTHROPIC_CONFIG = {
  // PRODUCTION: use your Cloudflare Worker URL
  proxyUrl: null, // e.g. "https://agentprep-proxy.yourname.workers.dev/chat"

  // TESTING ONLY: paste key directly (remove before going public)
  apiKey: "PASTE_YOUR_ANTHROPIC_API_KEY_HERE",
};
