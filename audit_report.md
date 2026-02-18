# Audit Report
## Data files summary
### `request_summary.ndjson`
- Rows: 1200
- Routes: {'inventory': 290, 'policy_only': 589, 'mixed': 321}
- Status: {'ok': 1167, 'error': 33}
- HTTP status (top): {200: 1167, 504: 16, 429: 6, 502: 6, 500: 5}
- Error types: {None: 1167, 'lambda_overload': 7, 'throttle': 6, 'openai_error': 6, 'timeout': 9, 'tool_error': 5}
- Peak window: {False: 796, True: 404}
- Lambda cold starts: {False: 1170, True: 30}
- Latency (ms): count=1200 min=600 p50=1020 p90=1519.10 p95=1669 p99=2091.04 max=2474 mean=1078.82
- Lambda concurrency: count=1200 min=30 p50=98 p90=350 p95=379.05 p99=411.01 max=418 mean=150.30
- Cache inventory hit: 34 (2.83%)
- Cache policy hit: 70 (5.83%)
- Cache any hit: 103 (8.58%)
- Error rate: 2.75%
- Errors by type (peak): {'lambda_overload': {'True': 7}, 'throttle': {'True': 6}, 'openai_error': {'True': 6}, 'timeout': {'True': 9}, 'tool_error': {'True': 5}}
- By peak: {'False': {'count': 796, 'error_rate': 0.0, 'cache_any_rate': 0.08542713567839195, 'latency_ms_total': {'count': 796, 'min': 600.0, 'p50': 900.0, 'p90': 1300.5, 'p95': 1424.5, 'p99': 1581.2499999999998, 'max': 1865.0, 'mean': 958.2625628140704}, 'lambda_concurrency_est': {'count': 796, 'min': 30.0, 'p50': 76.0, 'p90': 112.0, 'p95': 116.0, 'p99': 119.04999999999995, 'max': 120.0, 'mean': 74.78768844221105}}, 'True': {'count': 404, 'error_rate': 0.08168316831683169, 'cache_any_rate': 0.08663366336633663, 'latency_ms_total': {'count': 404, 'min': 812.0, 'p50': 1224.5, 'p90': 1759.4, 'p95': 1952.1, 'p99': 2339.7099999999987, 'max': 2474.0, 'mean': 1316.3415841584158}, 'lambda_concurrency_est': {'count': 404, 'min': 181.0, 'p50': 303.5, 'p90': 389.0, 'p95': 402.84999999999997, 'p99': 414.96999999999997, 'max': 418.0, 'mean': 299.08168316831683}}}

### `openai_usage.ndjson`
- Rows: 1200
- Routes: {'inventory': 290, 'policy_only': 589, 'mixed': 321}
- Status: {'ok': 1181, 'error': 19}
- Finish reason: {'stop': 1019, 'length': 62, 'tool': 100, 'error': 19}
- Length rate: 5.17%
- Model: {'gpt-4o': 1200}
- Prompt tokens: count=1200 min=669 p50=1423 p90=1910 p95=1971.05 p99=2051.02 max=2100 mean=1420.44
- Completion tokens: count=1200 min=82 p50=217 p90=257.10 p95=265 p99=275.01 max=288 mean=214.33
- Total tokens: count=1200 min=779 p50=1626.50 p90=2127.20 p95=2188.10 p99=2292.03 max=2346 mean=1634.77
- OpenAI latency (ms): count=1200 min=515 p50=740 p90=961.10 p95=1015 p99=1302.12 max=1350 mean=754.39
- Estimated cost (USD): count=1200 min=8.29 p50=17.63 p90=23.43 p95=24.14 p99=25.16 max=25.77 mean=17.56
- By peak: {'False': {'count': 796, 'finish_reason': {'stop': 688, 'length': 43, 'tool': 65}, 'length_rate': 0.05402010050251256, 'prompt_tokens': {'count': 796, 'min': 735.0, 'p50': 1434.0, 'p90': 1912.0, 'p95': 1970.0, 'p99': 2045.3999999999996, 'max': 2100.0, 'mean': 1424.2261306532664}, 'completion_tokens': {'count': 796, 'min': 142.0, 'p50': 215.0, 'p90': 258.0, 'p95': 266.0, 'p99': 275.0, 'max': 288.0, 'mean': 215.1746231155779}, 'total_tokens': {'count': 796, 'min': 949.0, 'p50': 1639.5, 'p90': 2129.5, 'p95': 2179.25, 'p99': 2275.7999999999993, 'max': 2346.0, 'mean': 1639.4007537688442}, 'latency_ms_openai': {'count': 796, 'min': 515.0, 'p50': 684.0, 'p90': 805.0, 'p95': 819.25, 'p99': 1028.5999999999995, 'max': 1105.0, 'mean': 685.8341708542714}, 'estimated_cost_usd': {'count': 796, 'min': 9.3336, 'p50': 17.702399999999997, 'p90': 23.4576, 'p95': 24.099600000000002, 'p99': 25.11828, 'max': 25.7712, 'mean': 17.607132663316584}}, 'True': {'count': 404, 'finish_reason': {'stop': 331, 'tool': 35, 'length': 19, 'error': 19}, 'length_rate': 0.04702970297029703, 'prompt_tokens': {'count': 404, 'min': 669.0, 'p50': 1401.0, 'p90': 1906.7, 'p95': 1973.6999999999998, 'p99': 2050.79, 'max': 2098.0, 'mean': 1412.9876237623762}, 'completion_tokens': {'count': 404, 'min': 82.0, 'p50': 218.5, 'p90': 257.0, 'p95': 263.84999999999997, 'p99': 277.93999999999994, 'max': 287.0, 'mean': 212.66584158415841}, 'total_tokens': {'count': 404, 'min': 779.0, 'p50': 1616.0, 'p90': 2121.2, 'p95': 2214.3999999999996, 'p99': 2306.91, 'max': 2322.0, 'mean': 1625.6534653465346}, 'latency_ms_openai': {'count': 404, 'min': 646.0, 'p50': 876.0, 'p90': 1037.5, 'p95': 1243.6999999999998, 'p99': 1339.7599999999998, 'max': 1350.0, 'mean': 889.480198019802}, 'estimated_cost_usd': {'count': 404, 'min': 8.292, 'p50': 17.3808, 'p90': 23.34336, 'p95': 24.221519999999995, 'p99': 25.156656, 'max': 25.7088, 'mean': 17.466249504950497}}}

### `spans_inventory_call.ndjson`
- Rows: 611
- Routes: {'inventory': 290, 'mixed': 321}
- Status: {'ok': 597, 'error': 14}
- HTTP status (top): {200: 597, 504: 9, 500: 5}
- Error types: {None: 611}
- Duration (ms): count=611 min=60 p50=276 p90=669 p95=747.50 p99=1241.40 max=1278 mean=353.45
- Payload size (bytes): count=611 min=401 p50=909 p90=1296 p95=1354 p99=1391.90 max=1398 mean=904.78
- Error rate: 2.29%
- Timeout buckets: {900: {'count': 339, 'p50': 185.0, 'p95': 312.09999999999997, 'p99': 438.84000000000015, 'max': 491.0}, 1300: {'count': 272, 'p50': 534.5, 'p95': 869.0, 'p99': 1259.0600000000004, 'max': 1278.0}}
- Cache hit keys: {'cache_hit': 68}

### `spans_openai_chat.ndjson`
- Rows: 1200
- Routes: {'inventory': 290, 'policy_only': 589, 'mixed': 321}
- Status: {'ok': 1181, 'error': 19}
- HTTP status (top): {200: 1181, 504: 7, 429: 6, 502: 6}
- Error types: {None: 1200}
- Duration (ms): count=1200 min=520 p50=739.50 p90=961.10 p95=1018.05 p99=1300.15 max=1357 mean=754.41
- Payload size (bytes): count=1200 min=1200 p50=2738 p90=3910.10 p95=4060.10 p99=4162.02 max=4200 mean=2716.14
- Error rate: 1.58%
- Timeout buckets: {1400: {'count': 1200, 'p50': 739.5, 'p95': 1018.05, 'p99': 1300.1499999999999, 'max': 1357.0}}

### `spans_retrieval.ndjson`
- Rows: 1200
- Routes: {'inventory': 290, 'policy_only': 589, 'mixed': 321}
- Status: {'ok': 1200}
- HTTP status (top): {None: 1200}
- Error types: {None: 1200}
- Duration (ms): count=1200 min=15 p50=69 p90=108 p95=117 p99=131.01 max=140 mean=70.55
- Payload size (bytes): count=1200 min=501 p50=1154.50 p90=1651 p95=1731.10 p99=1786.03 max=1798 mean=1155.49
- Error rate: 0.00%
- Timeout buckets: {250: {'count': 1200, 'p50': 69.0, 'p95': 117.0, 'p99': 131.01, 'max': 140.0}}
- Cache hit keys: {'cache_hit': 140}

## PPTX extraction
- Slides extracted: 10
- PPTX text output: `pptx_text.txt`
