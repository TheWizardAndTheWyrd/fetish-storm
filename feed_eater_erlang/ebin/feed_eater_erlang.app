{application,feed_eater_erlang,
    [{description,"Fetish-Storm client built on Chicago Boss in Erlang."},
     {vsn,"/bin/sh: line 1: 0.0.1: command not found"},
     {modules,
         [user_lib,feed_eater_erlang_outgoing_mail_controller,
          feed_eater_erlang_incoming_mail_controller,
          feed_eater_erlang_user_controller,feed_eater_erlang_feed_controller,
          feed_eater_erlang_user,feed_eater_erlang_custom_filters,
          feed_eater_erlang_custom_tags,feed_eater_erlang_view_lib_tags,
          feed_eater_erlang_view_user_register_html,
          feed_eater_erlang_view_user_login_html,
          feed_eater_erlang_view_feed_index_html,
          feed_eater_erlang_view_base_html]},
     {registered,[]},
     {applications,[kernel,stdlib,crypto]},
     {env,
         [{test_modules,[]},
          {lib_modules,[user_lib]},
          {websocket_modules,[]},
          {mail_modules,
              [feed_eater_erlang_outgoing_mail_controller,
               feed_eater_erlang_incoming_mail_controller]},
          {controller_modules,
              [feed_eater_erlang_user_controller,
               feed_eater_erlang_feed_controller]},
          {model_modules,[feed_eater_erlang_user]},
          {view_lib_helper_modules,
              [feed_eater_erlang_custom_filters,
               feed_eater_erlang_custom_tags]},
          {view_lib_tags_modules,[feed_eater_erlang_view_lib_tags]},
          {view_modules,
              [feed_eater_erlang_view_user_register_html,
               feed_eater_erlang_view_user_login_html,
               feed_eater_erlang_view_feed_index_html,
               feed_eater_erlang_view_base_html]}]}]}.
