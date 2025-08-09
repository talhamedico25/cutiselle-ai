Place your TensorFlow.js model files here.

Expected structure:
- model/model.json
- model/group1-shard1ofX.bin
- model/group1-shard2ofX.bin
- ... (all shard files output by tensorflowjs_converter or tfjs save)

Notes:
- The code loads a tfjs LayersModel from 'model/model.json'. If your model is a GraphModel, convert/save it as a tfjs_layers_model, or adjust the loader accordingly.
- Ensure the model outputs a probability/logit vector of length 22 in the class order you specify in CLASS_KEYS within tf-infer.js.
- Serving over HTTP is recommended. Opening index.html via file:// may block model loading due to browser security.