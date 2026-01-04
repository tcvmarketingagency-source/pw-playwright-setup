def log_test_start(test_name: str):
    with tracer.start_as_current_span(f"test:{test_name}") as span:
        span.set_attribute("test.name", test_name)
        print(f"🔥 Phoenix trace sent for test: {test_name}")
