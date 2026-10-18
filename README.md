# Daywear — local-learning prototype

Open `dist/index.html` in a modern browser. For consistent browser storage, serve `dist` from a static web server (for example `python -m http.server 8000 --directory dist`) and open http://localhost:8000. Mobile camera capture depends on browser support. File selection works as an alternative.

## Wardrobe
Upload clothing photos, organize tops/bottoms/shoes/accessories, shuffle outfits, lock categories, and save favorites. Illustrated demo wardrobe items are explicitly labeled.

## Train a personal model, without an API
1. Scroll to Outfit check and select an outfit photo (or use Take a photo).
2. Select an occasion, give the photo a short label, and choose your own rating from 1 to 10.
3. Click Add this photo as an example. Repeat with at least 6 different photos and at least two different ratings. Use 30–50 consistently framed photos for a more useful initial experiment.
4. Click Train my model.
5. Select a NEW outfit photo and click Check with my model.
6. Export your training data to back it up. Changes to training examples invalidate the model until you train again.

The model starts UNTRAINED. No scraped dataset, trained model weights, generated ratings, or fictional accuracy numbers are included. This is a small nearest-neighbor regression model fitted to examples you provide. It extracts 96 color/texture features from a 4x6 image grid, retrieves the three closest examples, and estimates a rating using inverse-distance weights. If three examples share the selected occasion it uses that subset; otherwise it explicitly falls back to all examples. It does not identify clothing, assess fit, understand occasions, or provide semantic fashion reasoning. Background, lighting, pose, and framing affect results. Styling prompts are explicitly labeled as general suggestions, not model-generated advice.

When seven or more examples are available, training reports leave-one-out mean absolute rating error. This is a diagnostic on a tiny personal dataset, not independent validation. Matching a training photo is marked as recall, not a new-image test. Do not use the prototype for consequential judgments.

## Storage
Wardrobe photos and saved looks use IndexedDB. Training stores image features, labels, and ratings in localStorage, not original outfit photos. Nothing is uploaded for inference. Training exports contain personal data and no original images. Clearing browser data removes local records. Delete training data leaves wardrobe storage intact. Google Fonts may be requested for typography; system fonts work offline.

## Checks
`node tests/local-model.test.cjs`

Model behavior tests and static checks passed. Browser interactions and mobile camera behavior have not been verified in this environment. Hosted publication is unavailable because the Sites source-workflow helpers are missing from this workspace.
