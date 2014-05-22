defmodule FeedEaterDynamo.Dynamo do
  use Dynamo

  config :dynamo,
    # The environment this Dynamo runs on
    env: Mix.env,

    # The OTP application associated with this Dynamo
    otp_app: :feed_eater_dynamo,

    # The endpoint to dispatch requests to
    endpoint: ApplicationRouter,

    # The route from which static assets are served
    # You can turn off static assets by setting it to false
    static_route: "/static"

  # Uncomment the lines below to enable the cookie session store
  # config :dynamo,
  #   session_store: Session.CookieStore,
  #   session_options:
  #     [ key: "_feed_eater_dynamo_session",
  #       secret: "Ezpd7LH8643CRHtwgVt69Yq4wa2GwA/+Fxi0uq36q5fL3g3ZvPsvww75b2qXkJA4"]

  # Default functionality available in templates
  templates do
    use Dynamo.Helpers
  end
end
