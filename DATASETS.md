# External dataset research status

External dataset access could not be completed in this environment. No external images were downloaded and no dataset license was verified. The app uses only examples explicitly provided by its user.

Potential sources for a future, more capable model:

- DeepFashion2: https://github.com/switchablenorms/DeepFashion2 — a candidate for garment recognition/localization, not a ready-made source of subjective outfit ratings. Verify the current data access agreement and permitted uses with the publisher.
- Polyvore outfits: https://github.com/xthan/polyvore-dataset — a candidate for studying outfit compatibility. Product combinations are a different input format from full-body camera photos. Verify current availability, image rights, and training/redistribution terms before use.

Neither dataset should be presented as human-scored, full-body outfit training data without checking its actual labels. Public accessibility is not proof of permission to train or redistribute.

For a camera-based fashion model, collect consented outfit photos with clothing-focused ratings, occasion labels, explanations, and desired swaps. Include diverse lighting and framing; hold out people and outfits from the training split during validation to reduce leakage. A higher-capability model would require separate training work and evaluation; the current local prototype does not claim those capabilities.
