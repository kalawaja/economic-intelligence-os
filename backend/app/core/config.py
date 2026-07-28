from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Central configuration, loaded from environment / .env."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "economic-intelligence-os"

    # Stores
    database_url: str = "postgresql+psycopg://econ:econ@localhost:5432/econintel"
    neo4j_uri: str = "bolt://localhost:7687"
    neo4j_user: str = "neo4j"
    neo4j_password: str = "neo4j_dev_password"
    opensearch_url: str = "http://localhost:9200"

    # Data sources
    sec_user_agent: str = "economic-intelligence-os dev contact@example.com"
    fec_api_key: str = "DEMO_KEY"

    # AI layer
    anthropic_api_key: str = ""
    llm_model: str = "claude-sonnet-4-6"

    # Platform
    ingest_api_key: str = ""
    cors_origins: str = "http://localhost:5173"
    default_tickers: str = "AAPL,MSFT,LMT,XOM,JPM"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def default_ticker_list(self) -> list[str]:
        return [t.strip().upper() for t in self.default_tickers.split(",") if t.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
