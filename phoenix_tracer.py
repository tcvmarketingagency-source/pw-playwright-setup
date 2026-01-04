import os
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter

PHOENIX_ENDPOINT = os.getenv("PHOENIX_ENDPOINT", "http://localhost:4318/v1/traces")
PROJECT_NAME = os.getenv("PHOENIX_PROJECT_NAME", "pw-playwright-setup")

provider = TracerProvider()
processor = BatchSpanProcessor(
    OTLPSpanExporter(endpoint=PHOENIX_ENDPOINT)
)

provider.add_span_processor(processor)
trace.set_tracer_provider(provider)

tracer = trace.get_tracer(PROJECT_NAME)

def start_test_span(test_name: str):
    return tracer.start_as_current_span(f"test:{test_name}")
