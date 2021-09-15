# SST with TSOA

An example of deep merging TSOA with API gateway

## Explanation

- TSOA enables generating route annotations from decorators.
- API gateway supports return a base schema.

The two schemas are merged after deploy to create a single shared schema.

## Usage

```bash
# Deploy the API
yarn deploy --outputs-file ./utils/api-id.json

# Get docs from APIGateway; deep-merge local docs
yarn spec
```
