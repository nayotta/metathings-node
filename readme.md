# metathings-node

node module for metathings

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