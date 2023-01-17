# setup-gh-token

This action takes a `GH_APP_TOKEN` base64 encoded string. This string should include the `appId`, `installationId`, and `privateKey`

This action outputs a `GH_TOKEN` in the format of `ghs_xxx` which
expires in 60 minutes after being generated

## Inputs

### `GH_APP_TOKEN`

**Required** 

This action takes an input of a base64 encoded json blob containing 
an `appId`, `installationId` and `privateKey`. Using this inputs it generates 
a ghs_token that lasts for 60 minutes.

example below...

## Outputs

### `GH_TOKEN`

`GH_TOKEN` is outputted. The value of this is the `ghs_token` that can be reused
to make API calls under the github applications credentials.

## Example usage

```yaml
uses: actions/setup-gh-token@v1
with:
  GH_APP_TOKEN: ${{secrets.GH_APP_TOKEN}}
```


The base64 encoded json blob should be formatted as follows.
```bash
{"appId":"12345","installationId":"1234567","privateKey":"-----BEGIN OPENSSH PRIVATE KEY-----\n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\n-----END OPENSSH PRIVATE KEY-----"}
```

example base64 blob
```bash
echo '{"appId":"12345","installationId":"1234567","privateKey":"-----BEGIN OPENSSH PRIVATE KEY-----\n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\n-----END OPENSSH PRIVATE KEY-----"}' | base64

eyJhcHBJZCI6IjEyMzQ1IiwiaW5zdGFsbGF0aW9uSWQiOiIxMjM0NTY3IiwicHJpdmF0ZUtleSI6Ii0tLS0tQkVHSU4gT1BFTlNTSCBQUklWQVRFIEtFWS0tLS0tCmIzQmxibk56YUMxclpYa3RkakVBQUFBQUJHNXZibVVBQUFBRWJtOXVaUUFBQUFBQUFBQUJBQUFCbHdBQUFBZHpjMmd0Y24KTmhBQUFBQXdFQUFRQUFBWUVBNHhIM2lnNnErNFJZNFZGYUtHVDN6ZnQwSjg0c1pUZzVPd3JoTlNKcEZVSitJYWJ2K2tnYQpLSmY0aHFLVWxaYVJUTkFEUWJtWVRDdy94TWlrTGNBZm40T21xelB0cjZuemE2Y1BvMnYzTkxJUzl0Mklxdk92UjQ0TXBhCldGNm1icUJDTUMxeDIxN2lSYWNVc0MrZ1ExU2VseFlCOU1iSWFGMmIzY0NTV2Z4YS9JcFFMaFdMcWVYRkhzZ2l6U3QzN1cKQTYxYUEveGI1eG8rNm1wTEJ3ZUltbEc0V2dsZVloZzNMT1ZqUnpDTy9hejdnWENrdEhxY0h4bGh5dXFSbjBhNnFFSG42SgpBSzFIaUV3aStBV2hNZFlBbDNYVEZKeEs5Z3hSa0x2alJIdU9ncG9Gdmlld0pRNUpqZUptUTYxZlRyRC9sMm0wekR3YzF3CkUzNzU5anU1NVVYWVI1em5SdFB3Uy93Sm9sRlVNaVRybFVxWmdKNkUrdFdiUEMxZGdsYzdXQ1pnb093RDJlWFl6SUlHVjMKV2p0bXBCQ2RyU3VtSTQrRFVkSEZKaXRHaGFTRnlrM3ZiamFSdGdWNVBJWVg3MWZ2WjhQaTdZN0ZWUDR1VnZkQkEwSVA1NApUWmFBWFE2UGRBRUh6Vnh4Mm9FS3QyTFVYSHRyRDg1K0tqRE45SDg1QUFBRmtLUmgxRmFrWWRSV0FBQUFCM056YUMxeWMyCkVBQUFHQkFPTVI5NG9PcXZ1RVdPRlJXaWhrOTgzN2RDZk9MR1U0T1RzSzRUVWlhUlZDZmlHbTcvcElHaWlYK0lhaWxKV1cKa1V6UUEwRzVtRXdzUDhUSXBDM0FINStEcHFzejdhK3A4MnVuRDZOcjl6U3lFdmJkaUtyenIwZU9ES1dsaGVwbTZnUWpBdApjZHRlNGtXbkZMQXZvRU5VbnBjV0FmVEd5R2hkbTkzQWtsbjhXdnlLVUM0Vmk2bmx4UjdJSXMwcmQrMWdPdFdnUDhXK2NhClB1cHFTd2NIaUpwUnVGb0pYbUlZTnl6bFkwY3dqdjJzKzRGd3BMUjZuQjhaWWNycWtaOUd1cWhCNStpUUN0UjRoTUl2Z0YKb1RIV0FKZDEweFNjU3ZZTVVaQzc0MFI3am9LYUJiNG5zQ1VPU1kzaVprT3RYMDZ3LzVkcHRNdzhITmNCTisrZlk3dWVWRgoyRWVjNTBiVDhFdjhDYUpSVkRJazY1VkttWUNlaFByVm16d3RYWUpYTzFnbVlLRHNBOW5sMk15Q0JsZDFvN1pxUVFuYTByCnBpT1BnMUhSeFNZclJvV2toY3BONzI0MmtiWUZlVHlHRis5WDcyZkQ0dTJPeFZUK0xsYjNRUU5DRCtlRTJXZ0YwT2ozUUIKQjgxY2NkcUJDcmRpMUZ4N2F3L09maW93emZSL09RQUFBQU1CQUFFQUFBR0FORGx3cG1jRE9qL1JOVmxCbENMTXY2cENwOQprS2F1bEllR1RqTVJaTjl0N0pKYkpBWlY3cDdVWXVtY0NRemVySVZsTk5QSE9VTElqTXpkU2J0ZzRHOStnT2tEZXNSZ2VmCmZiWDVxY3R1R3NlT0J3c2lvTGJWTEc3bVI3N1BFdjlDZVZzWUR5TzlNUjFaVTg4OXl3VG13SzRaTGxOa2YxMWRNWnd5SEUKUnovOEtUTWloOGJheldPVU42VXVJK1FJZkNieXdTbFBJWXJRbGpTUVRUWnJWNzNJcEpEU1EwZWZrNXozQ2VxY1BvVHozVwp4b21DeUNPZS9xUVcwdFdxVW1pd25KUmhEQjBrRVE0WGJtdk1PY1EzM1M3Rmt1dXRKTWFjUkxlVkRRR3lxR0V3aVd5TmFwCnNDTDVqYW5CcXliN2c0RTFJTzNYd04xSVlTNkdPZnY5VWhUcHM0d0pIa09KYzd1MXU0SmtEbWwvWnhHREcxbXRmTjNWb0IKekZmZThVOStIWUhScGs0ZGNqaFRCUlFRQUswYTc3aVlTOCtqdmZERFlNVnZOM3RabjRjL0RPRkhaT2toZlorY0owcmM5QQpUOStBVzF0TG5Da3hhbHppcUo5eGRLN2ZOOHd3Syt4aWU5SDlVamNjWUppT2FUUnlHNlVIVEloTGdFWEVZR2JkR1JBQUFBCndFNkgzdDBwWHdhQUZmcW90QWxFK1FIZno1RkdsenZtcTA4alpFWFF0ZTYzT3ZwamZ0emRSNkViTWtYRVlERnJCK0RMYW8KQlhuQkQvS0M3cTNyMzRsWFVmK1A5KzR3WlJoYjNPM1d6TnJvSzhYam5jQW5iQmpqVzIzeVJEaG9qUnlORThpc2ZxcG5IeApiS0NWbmtuSzY0SHUyUmFZaTFvTzVGMFdvZXZWS0l3cGV6dDlJdlBLcDB1UWpUUDhZMlFqYnhKejhEZGo2OGdaaFN2b3lOCk1lbUxZcGZUT2RzNHJ5cEF4eUcyOHdoTTRwNFMvM2FQcU03T1FCeEUvYVhOVVUzd0FBQU1FQThoTUYzYWlmcGhJM29TT2cKajVGUDdkT21UVGluU2pxMWhTZHNNbC90NHBIdWszeTl6SXVIdmhOS3BHNkpLY0tvOVVHWXE5a3ZZVFQ5Q2gyVDV1VENVTQpXTDhyRngwaUI2dGRMR1A1b3pYb05QM3JidGlVU1gvbG9FZ3lzeE9LNys3RVlQMWVQM0Y2eis5bFd5N0hxVCtUNkJ0VDRyClpHN3BVamZYdTI5SVNFU0FITGxqQm1JbFMrb2Z0alBUQkloU2RkZUQ5U2gxUWU5clRBc2NKaUtMVUd2elVwb1FZZzFITjUKd29yZGxaYmo0dXpFbG0wZnE3V1BxUCtpR2NrRDAxQUFBQXdRRHdJZnRCWndpUm1ielRBRDhDeEh6dlkzbExVM3NuRmQwSwpsU1l6MHBjZFAyZlRvazhzUFlsRGFURkJnQTI0Q2o5VHFkRm9yMG8vMFdnS1JZYUs1b043V3hqYlVmNnRzUThoQThteUZLCjNESi93YWgvVEl4aS9RMGEyY2RzZkY5S3gvdHZUMVhBNldWdHVMajV6dDI1QU9YTWVwcTBBaGk5SjNsNXJjUkM2WisydWkKNlN6OGh2cVFkZzc0aFA4VWVnSWxWajJPUG01eitqdXJZWEt1SHhVaWRsQmJBVXhxNjhJNDdNR0ZmaTZKZ1huZjZDSDUzWAp6Sm5yd3k1L2NGTG5VQUFBQWJhMkZqWlhsbllXMWlhV3hzUUd0aFkyVjVjeTF0WW5BdWJHRnUKLS0tLS1FTkQgT1BFTlNTSCBQUklWQVRFIEtFWS0tLS0tIn0K
```

