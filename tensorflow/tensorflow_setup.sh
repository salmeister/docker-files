# Change this path to your config directory
CONFIG_DIR="/nas/docker/hass/homeassistant"

cd /tmp

# Clone the latest code from GitHub
git clone --depth 1 https://github.com/tensorflow/models.git tensorflow-models

# download protobuf 3.4
curl -OL https://github.com/google/protobuf/releases/download/v3.4.0/protoc-3.4.0-linux-x86_64.zip
unzip -a protoc-3.4.0-linux-x86_64.zip -d protobuf
mv protobuf/bin /tmp/tensorflow-models/research

# Build the protobuf models
cd /tmp/tensorflow-models/research/
./bin/protoc object_detection/protos/*.proto --python_out=.

# Copy only necessary files
mkdir -p ${CONFIG_DIR}/tensorflow/object_detection
touch ${CONFIG_DIR}/tensorflow/object_detection/__init__.py
mv object_detection/data ${CONFIG_DIR}/tensorflow/object_detection
mv object_detection/utils ${CONFIG_DIR}/tensorflow/object_detection
mv object_detection/protos ${CONFIG_DIR}/tensorflow/object_detection

# Cleanup
rm -rf /tmp/*
