# metathings-node

[![Build and Lint](https://github.com/nayotta/metathings-node/actions/workflows/build.yml/badge.svg)](https://github.com/nayotta/metathings-node/actions/workflows/build.yml)

node module for metathings grpc api

# install
  ```
  npm install @nayotta/metathings-node
  ```

# oneof

  proto:
  ```
  message Message {
    oneof kind {
      string str = 1;
      int32 num = 2;
    }
  }
  ```

  data:
  ```
  {
    kind: {
      str: 'chose string'
    }
  }
  ```

# any

  proto:
  ```
  message Message {
    any kind = 1;
  }
  ```

  data:
  ```
  {
    kind: {
      type_url: '',
      value: ''
    }
  }
  ```