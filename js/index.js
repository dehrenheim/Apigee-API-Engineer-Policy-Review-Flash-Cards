// TODO: Clean up this code!!
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; } function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } var
  CreateCard = function (_React$Component) {
    _inherits(CreateCard, _React$Component);
    function CreateCard() {
      _classCallCheck(this, CreateCard); var _this = _possibleConstructorReturn(this, (CreateCard.__proto__ || Object.getPrototypeOf(CreateCard)).call(this));

      _this.state = {
        word: '',
        description: '',
        showError: false
      }; return _this;

    } _createClass(CreateCard, [{
      key: 'hideError', value: function hideError() {
        this.setState({ showError: !this.state.showError });
      }
    }, {
      key: 'render', value: function render() {
        var _this2 = this;
        var errorMessage = this.state.showError ? 'Please fill in the word and description!' : '';
        return (
          React.createElement('div', { className: 'create-card' },
            React.createElement('div', {
              className: 'create-card__shadow',
              onClick: function onClick() {
                _this2.props.onShadowClick();
              }
            }),


            React.createElement('div', { className: 'create-card__body' },
              React.createElement('h1', null, 'Create New Card'),
              React.createElement('div', { className: 'create-card__input-wrapper' },
                React.createElement('input', {
                  id: 'word',
                  placeholder: 'Word i.e. \'React\'',
                  value: this.state.word,
                  onChange: function onChange(e) { return _this2.setState({ word: e.target.value }); }
                }),

                React.createElement('input', {
                  id: 'description',
                  placeholder: 'Description i.e. \'A front end js framework.\'',
                  value: this.state.description,
                  onChange: function onChange(e) { return _this2.setState({ description: e.target.value }); }
                }),

                React.createElement('br', null),
                React.createElement('button', {
                  id: 'create-card__button',
                  onClick: function onClick() {

                    if (_this2.state.word.length === 0 || _this2.state.description.length === 0) {
                      _this2.setState({ showError: !_this2.state.showError });
                      setTimeout(function () { return _this2.hideError(); }, 2000);
                    } else {
                      _this2.props.onShadowClick();
                      var word = new Immutable.Map({ word: _this2.state.word, description: _this2.state.description });
                      _this2.props.onCreateCard(word);
                    }
                  }
                }, 'Create!'),



                React.createElement('div', { className: 'create-card__error' },
                  errorMessage)))));





      }
    }]); return CreateCard;
  }(React.Component); var


    Header = function (_React$Component2) {
      _inherits(Header, _React$Component2);
      function Header() {
        _classCallCheck(this, Header); var _this3 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this3.state = {
          showModal: false
        }; return _this3;

      } _createClass(Header, [{
        key: 'render', value: function render() {
          return (
            React.createElement('div', { className: 'header' },
              React.createElement('div', { className: 'header-content header-content__left' }),
              React.createElement('div', { className: 'header-content header-content__middle' }, 'Apigee API Engineer Policy Review Flash Cards. Content from https://docs.apigee.com'),
              React.createElement('div', { className: 'header-content header-content__right' })));
        }
      }]); return Header;
    }(React.Component); var

      Card = function (_React$Component3) {
        _inherits(Card, _React$Component3);

        function Card() {
          _classCallCheck(this, Card); var _this4 = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

          _this4.state = {
            showAnswer: false
          }; return _this4;

        } _createClass(Card, [{
          key: 'render', value: function render() {
            var _this5 = this;
            var content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
            var iconClass = this.state.showAnswer ? 'reply' : 'share';
            var cardClass = this.state.showAnswer ? 'back' : '';
            var contentClass = this.state.showAnswer ? 'back' : 'front';
            var actionClass = this.state.showAnswer ? 'active' : '';

            return (
              React.createElement('div', {
                className: 'card ' + cardClass,
                onClick: function onClick() { return _this5.setState({ showAnswer: !_this5.state.showAnswer }); }
              },

                React.createElement('span', { className: 'card__counter' }, this.props.cardNumber + 1),
                React.createElement('div', {
                  className: 'card__flip-card',
                  onClick: function onClick() {
                    _this5.setState({ showAnswer: !_this5.state.showAnswer });
                  }
                },


                  React.createElement('span', { className: 'fa fa-' + iconClass })),

                React.createElement('div', { className: 'card__content--' + contentClass },
                  content),

                React.createElement('div', { className: 'card__actions ' + actionClass },
                  React.createElement('div', {
                    className: 'card__prev-button',
                    onClick: function onClick() {
                      _this5.props.showPrevCard();
                      _this5.setState({ showAnswer: false });
                    }
                  }, 'Prev'),



                  React.createElement('div', {
                    className: 'card__next-button',
                    onClick: function onClick() {
                      _this5.props.showNextCard();
                      _this5.setState({ showAnswer: false });
                    }
                  }, 'Next'))));






          }
        }]); return Card;
      }(React.Component); var


        CardContainer = function (_React$Component4) {
          _inherits(CardContainer, _React$Component4);
          function CardContainer() {
            _classCallCheck(this, CardContainer); var _this6 = _possibleConstructorReturn(this, (CardContainer.__proto__ || Object.getPrototypeOf(CardContainer)).call(this));
            // Flash card data. TODO: move this to a JSON file.
            _this6.state = {
              cards: Immutable.fromJS(
                [
                  {
                    word: 'InvalidateCache policy',
                    description: 'Configures how the cached values should be purged from the cache. This policy is intended for use in general purpose short-term caching. It is used in conjunction with the Populate Cache policy (for writing entries) and the Lookup Cache policy (for reading cache entries). For caching the responses of backend resources, see the Response Cache policy.'
                  },
                  {
                    word: 'LookupCache policy',
                    description: 'Configures how cached values should be retrieved at runtime. This policy is intended for use in general purpose short-term caching. It is used in conjunction with the Populate Cache policy (for writing entries) and the Invalidate Cache policy (for invalidating entries). For caching the responses of backend resources, see the Response Cache policy.'
                  },
                  {
                    word: 'PopulateCache policy',
                    description: 'Configures how cached values should be written at runtime. The Populate Cache policy is designed for writing entries in a short-term general-purpose cache. It\'s used in conjunction with the Lookup Cache policy (for reading cache entries) and the Invalidate Cache policy (for invalidating entries). For caching the responses of backend resources, see the Response Cache policy.'
                  },
                  {
                    word: 'ResponseCache policy',
                    description: 'Caches data from a backend resource, reducing the number of requests to the resource. As apps make requests to the same URI, you can use this policy to return cached responses instead of forwarding those requests to the backend server. The ResponseCache policy can improve your API\'s performance through reduced latency and network traffic. You\'ll likely find ResponseCache most useful when backend data used by your API is updated only periodically. For example, imagine you have an API that exposes weather report data refreshed only every ten minutes. By using ResponseCache to return cached responses between refreshes, you can decrease the number of requests reaching the backend. This also reduces the number of network hops. For general purpose short-term caching, considering using the Populate Cache policy. That policy is used in conjunction with the Lookup Cache policy (for reading cache entries) and the Invalidate Cache policy (for invalidating entries).'
                  },
                  {
                    word: 'ConcurrentRateLimit policy',
                    description: 'What: Throttles inbound connections from your API proxies running on Apigee Edge to your backend services. Need help deciding which rate limiting policy to use? See Comparing Quota, Spike Arrest, and Concurrent Rate Limit Policies.'
                  },
                  {
                    word: 'Quota policy',
                    description: 'What: Use the Quota policy to configure the number of request messages that an API proxy allows over a period of time, such as a minute, hour, day, week, or month. You can set the quota to be the same for all apps accessing the API proxy, or you can set the quota based on: The product that contains the API, proxy, The app requesting the API, The app developer, Many other criteria. Don\'t use Quota to shield against overall traffic spikes. For that, use the Spike Arrest policy. See Spike Arrest policy.'
                  },
                  {
                    word: 'ResetQuota policy',
                    description: 'What: Use to dynamically modify the remaining number of requests allowed by the target Quota policy. You typically use this policy to decrease the current quota count of the target Quota policy rather than waiting for the quota count to reset. For example, the target Quota policy limits a developer to 1000 requests per week. By the second day of the week, the developer has already reached this limit. Use the Reset Quota policy to subtract 500 from their quota counter to allow an additional 500 requests for the remainder of the week. At the end of the week, the Quota policy resets, and the developer is back to 1000 requests for the week.'
                  },
                  {
                    word: 'SpikeArrest policy',
                    description: 'The Spike Arrest policy protects against traffic spikes with the <Rate> element. This element throttles the number of requests processed by an API proxy and sent to a backend, protecting against performance lags and downtime.'
                  },
                  {
                    word: 'AccessEntity policy',
                    description: 'The AccessEntity policy functions as a policy-based runtime database lookup. You can use the profile information returned by this policy to enable dynamic behavior, such as conditional endpoint routing, flow execution, policy enforcement. You use the AccessEntity policy to get entity profile data as XML and put it into a variable. You identify the entity to get by specifying an entity type and one or more identifiers that specify which entity of that type you want. Later, in another policy, you can retrieve the entity profile data with another policy, such as a Extract Variables policy or Assign Message policy.'
                  },
                  {
                    word: 'AssignMessage policy',
                    description: 'Changes or creates new request and response messages during the API proxy Flow. The Assign Message policy lets you perform the following actions on those messages: Add new form parameters, headers, or query parameters to a message, Copy existing properties from one message to another, Remove headers, query parameteters, form parameters, and/or message payloads from a message, Set the value of existing properties in a message. With Assign Message, you typically add, change, or remove properties of either the request or response. However, you can also use Assign Message to create a custom request or response message and pass it to an alternative target, as described in Create custom request messages.'
                  },
                  {
                    word: 'ExtractVariables policy',
                    description: 'Extracts content from a request or response and sets the value of a variable to that content. You can extract any part of the message, including headers, URI paths, JSON/XML payloads, form parameters, and query parameters. The policy works by applying a text pattern to the message content and, upon finding a match, sets a variable with the specified message content. While you often use this policy to extract information from a request or response message, you can also use it to extract information from other sources, including entities created by the Access Entity policy, XML objects, or JSON objects. After extracting the specified message content, you can reference the variable in other policies as part of processing a request and response.'
                  },
                  {
                    word: 'JSONtoXML policy',
                    description: 'What: This policy converts messages from the JavaScript Object Notation (JSON) format to extensible markup language (XML), giving you several options for controlling how messages are converted. The policy is particularly useful if you want to transform messages using XSL. After converting a JSON payload to XML, use the XSL Transform policy with a custom style sheet to perform the transformation you need. Note: The HTTP Content-type header of the source message must be set to application/json, otherwise the policy is not enforced, meaning it is skipped during processing. Assuming that the intent is to convert a JSON-formatted request into an XML-formatted request, the policy would be attached to a request Flow (for example, Request / ProxyEndpoint / PostFlow).'
                  },
                  {
                    word: 'KeyValueMapOperations policy',
                    description: 'What: Provides policy-based access to a key/value map (KVM) store available in Apigee Edge. Key/value pairs can be stored, retrieved, and deleted from named existing maps by configuring KeyValueMapOperations policies that specify PUT, GET, or DELETE operations. (At least one of these operations must be performed by the policy.)'
                  },
                  {
                    word: 'RaiseFault policy',
                    description: 'What: Generates a custom message in response to an error condition. Use Raise Fault to define a fault response that is returned to the requesting app when a specific condition arises. For general information on handling faults, see Handling faults.'
                  },
                  {
                    word: 'SOAPMessageValidation policy',
                    description: 'The SOAPMessageValidation policy does the following: Validates any XML message against their XSD schemas, Validates SOAP messages against a WSDL definition, Determines well-formedness of JSON and XML messages. While the name of this policy in the UI is "SOAP Message Validation", the policy validates more than just SOAP messages.'
                  },
                  {
                    word: 'XMLtoJSON policy',
                    description: 'What: This policy converts messages from the extensible markup language (XML) format to JavaScript Object Notation (JSON), giving you several options for controlling how messages are converted. Assuming that the intent is to convert an XML-formatted response into a JSON-formatted response, the policy would be attached to a response Flow (for example, Response / ProxyEndpoint / PostFlow). About: In a typical mediation scenario, a JSON to XML policy on the inbound request flow is often paired with an XML to JSON policy on the outbound response flow. By combining policies this way, a JSON API can be exposed for backend services that natively support only XML. For scenarios where APIs are consumed by diverse client apps that may require either JSON or XML, the response format can be dynamically set by configuring JSON to XML and XML to JSON policies to execute conditionally. See Flow variables and conditions for an implementation of this scenario.'
                  },
                  {
                    word: 'XSLTransform policy',
                    description: 'What: The XSL Transform policy applies custom Extensible stylesheet language transformations (XSLT) to XML messages, letting you transform them from XML to another format, such as XML, HTML, or plain text. The policy is often used to integrate applications that support XML, but that require different XML-formats for the same data. Note: This policy will transform XML only if the Content-Type header on the message to be transformed is set to XML. For example, text/xml or application/xml.'
                  },
                  {
                    word: 'AccessControl policy',
                    description: 'What: The Access Control policy lets you allow or deny access to your APIs by specific IP addresses. While you can attach this policy anywhere in the API proxy flow, you\'ll most likely want to check IP addresses at the beginning of the flow ( Request / ProxyEndpoint / PreFlow), even before authentication or quota checking.'
                  },
                  {
                    word: 'BasicAuthentication policy',
                    description: 'What: Enables you to use lightweight Basic Authentication for last-mile security. The policy takes a username and password, Base64 encodes them, and writes the resulting value to a variable. The resulting value is in the form Basic Base64EncodedString. You typically write this value to an HTTP header, such as the Authorization header. The policy also lets you decode credentials stored in a Base64 encoded string into a username and password.'
                  },
                  {
                    word: 'JSONThreatProtection policy',
                    description: 'What: Minimizes the risk posed by content-level attacks by enabling you to specify limits on various JSON structures, such as arrays and strings. Note: This policy executes only if the Content-Type of the request or response header is set to application/json.'
                  },
                  {
                    word: 'DecodeJWT policy',
                    description: 'What: Decodes a JWT without verifying the signature on the JWT. This is most useful when used in concert with the Verify JWT Policy, when the value of a claim from within the JWT must be known before verifying the signature of the JWT. The JWT Decode policy works regardless of the algorithm that was used to sign the JWT.'
                  },
                  {
                    word: 'GenerateJWT policy',
                    description: 'What: Generates a signed JWT, with a configurable set of claims. The JWT can then be returned to clients, transmitted to backend targets, or used in other ways.'
                  },
                  {
                    word: 'VerifyJWT policy',
                    description: 'What: Verifies the signature on a JWT received from clients or other systems. This policy also extracts the claims into context variables so that subsequent policies or conditions can examine those values to make authorization or routing decisions. When this policy executes, Edge verifies the signature of a JWT, and verifies that the JWT is valid according to the expiry and not-before times if they are present. The policy can optionally also verify the values of specific claims on the JWT, such as the subject, the issuer, the audience, or the value of additional claims. If the JWT is verified and valid, then all of the claims contained within the JWT are extracted into context variables for use by subsequent policies or conditions, and the request is allowed to proceed. If the JWT signature cannot be verified or if the JWT is invalid because of one of the timestamps, all processing stops and an error is returned in the response. To learn about the parts of a JWT and how they are encrypted and signed, refer to RFC7519.'
                  },
                  {
                    word: 'LDAP policy',
                    description: 'What: Use the LDAP Policy when access to protected resources should be limited to users in your LDAP provider—such as your admin users, organization users, and developers—especially when OAuth token access is either unnecessary or too heavyweight. The policy is also designed for retrieving domain name metadata for use in API proxy flows. For example you can have an API call execute only when a user is successfully authenticated against LDAP; and then optionally retrieve DN attributes for the user after authentication succeeds. Private Cloud: This policy is available only in Apigee Edge for Private Cloud.'
                  },
                  {
                    word: 'DeleteOAuthV2Info policy',
                    description: 'What: Deletes the specified OAuth V2 authorization code or access token. Note: Alternatively, you can revoke and re-approve tokens, as described in Approving and revoking access tokens.'
                  },
                  {
                    word: 'GetOAuthV2Info policy',
                    description: 'What: Gets attributes of access tokens, refresh tokens, authorization codes, and client app attributes and populates variables with the values of those attributes. This policy is useful when you need to configure dynamic, conditional behavior based on a value in a token or auth code. Whenever token validation occurs, variables are automatically populated with the values of token attributes. However, in cases where token validation has not occured, you can use this feature to explicity populate variables with the attribute values of a token. See also Customizing Tokens and Authorization Codes. An access token that you pass to this policy must be valid or the policy will throw an invalid_access_token error.'
                  },
                  {
                    word: 'OAuthV2 policy',
                    description: 'What: OAuthV2 is a multi-faceted policy for performing OAuth 2.0 grant type operations. This is the primary policy used to configure OAuth 2.0 endpoints on Apigee Edge. Tip: If you want to learn more about OAuth on Apigee Edge, see the OAuth home page. It provides links to resources, samples, videos, and more. See the advanced OAuth sample on GitHub for a good demonstration of how this policy is used in a working application.'
                  },
                  {
                    word: 'SetOAuthV2Info policy',
                    description: 'What: Lets you add or update custom attributes associated with an access token. Custom attributes might include things like department name, a customer ID, or a session identifier. See also Customizing Tokens and Authorization Codes. You can only add or modify custom attributes. You cannot use this policy to change fields like scope, status, expires_in, developer_email, client_id, org_name, or refresh_count. If an attribute already exists, this policy updates it. If it does not exist, the policy adds it. The access token referenced must be valid and in an approved state.'
                  },
                  {
                    word: 'DeleteOAuthV1Info policy',
                    description: 'What: Deletes OAuth v1.0a request tokens, verifiers, and access tokens.'
                  },
                  {
                    word: 'RegularExpressionProtection policy',
                    description: 'What: Extracts information from a message (for example, URI Path, Query Param, Header, Form Param, Variable, XML Payload, or JSON Payload) and evaluates that content against predefined regular expressions. If any specified regular expressions evaluate to true, the message is considered a threat and is rejected.'
                  },
                  {
                    word: 'SAMLAssertion policies',
                    description: 'What: Inbound authentication and authorization: Validate SAML Assertion policy. The SAML policy type enables API proxies to validate SAML assertions that are attached to inbound SOAP requests. The SAML policy validates incoming messages that contain a digitally-signed SAML assertion, rejects them if they are invalid, and sets variables that allow additional policies, or the backend services itself, to further validate the information in the assertion. Outbound token generation: Generate SAML Assertion policy. The SAML policy type enables API proxies to attach SAML assertions to outbound XML requests. Those assertions are then available to enable backend services to apply further security processing for authentication and authorization.'
                  },
                  {
                    word: 'VerifyAPIKey policy',
                    description: 'What: The Verify API Key policy lets you enforce verification of API keys at runtime, letting only apps with approved API keys access your APIs. This policy ensures that API keys are valid, have not been revoked, and are approved to consume the specific resources associated with your API products.'
                  },
                  {
                    word: 'XMLThreatProtection policy',
                    description: 'What: Address XML vulnerabilities and minimize attacks on your API. Optionally, detect XML payload attacks based on configured limits. Screen against XML threats using the following approaches: Validate messages against an XML schema (.xsd), Evaluate message content for specific blacklisted keywords or patterns, Detect corrupt or malformed messages before those messages are parsed. Note: This policy executes only if the Content-Type of the request or response header is set to application/xml.'
                  },
                  {
                    word: 'ExtensionCallout policy',
                    description: 'Use the ExtensionCallout policy to incorporate an extension into an API proxy. An extension provides access to a specific resource external to Apigee Edge. The resource could be Google Cloud Platform services such as Cloud Storage or Cloud Speech-to-Text. But the resource could be any external resource accessible over HTTP or HTTPS.'
                  },
                  {
                    word: 'FlowCallout policy',
                    description: 'Use the FlowCallout policy to call out to a shared flow from either an API proxy or another shared flow. In a shared flow, you create a sequence of steps that you can reuse at run time from multiple places. These steps are implemented as policies, as within an API proxy. The FlowCallout policy gives you a way to invoke the shared flow from API proxies and other shared flows. It works like a function call in a traditional programming language. For example, imagine that you\'ve built a shared flow with security features such as API key verification, OAuth token validation, and regular expression protection. This shared flow represents your convention for a way to check inbound requests. Using the FlowCallout policies, you can invoke that shared flow from multiple API proxies. You can call one shared flow from another by implementing a FlowCallout policy from within a shared flow.'
                  },
                  {
                    word: 'JavaCallout policy',
                    description: 'What: Enables you to use Java to implement custom behavior that is not included out-of-the-box by Apigee policies. In your Java code, you can access message properties (headers, query parameters, content) and flow variables in the proxy flow.'
                  },
                  {
                    word: 'JavaScript policy',
                    description: 'What: This policy lets you add custom JavaScript code that executes within the context of an API proxy flow. In your custom JavaScript code, you can use the objects, methods, and properties of the Apigee Edge JavaScript object model. The object model lets you get, set, and remove variables in the proxy flow context. You can also use basic cryptographic functions that are provided with the object model.'
                  },
                  {
                    word: 'MessageLogging policy',
                    description: 'What: One of the best ways to track down problems in the API runtime environment is to log messages. You can attach and configure a Message Logging policy on your API to log custom messages to a local disk (Edge for Private Cloud only) or to syslog.'
                  },
                  {
                    word: 'PythonScript policy',
                    description: 'What: The Python Script policy lets you add customized Python functionality to your API proxy flow, especially when the functionality you need is beyond what the Edge out-of-the-box policies provide. Python language support is provided through Jython version 2.5.2. Third-party libraries you add must be "pure Python" (implemented only in Python). For more on adding libraries, see Resource files.'
                  },
                  {
                    word: 'ServiceCallout policy',
                    description: 'What: The Service Callout policy lets you call to an another service from your API proxy flow. You can make callouts to either an external service (such as an external RESTful service endpoint) or internal services (such as an API proxy in the same organization and environment). The policy supports requests over HTTP and HTTPS.'
                  },
                  {
                    word: 'StatisticsCollector policy',
                    description: 'What: Enables you to collect statistics for data in a message, such as product ID, price, REST action, client and target URL, and message length. The data can come from flow variables predefined by Apigee or custom variables that you define. The statistics data is passed to the analytics server, which analyzes the statistics and generates reports. You can view the reports by using the Edge management UI or Edge API.'
                  },
                ]),

              cardNumber: 0
            };

            _this6.boundCallback = _this6.hideCreateCard.bind(_this6);
            _this6.boundCreateCard = _this6.setCard.bind(_this6);
            _this6.boundShowPrevCard = _this6.showPrevCard.bind(_this6);
            _this6.boundShowNextCard = _this6.showNextCard.bind(_this6); return _this6;
          } _createClass(CardContainer, [{
            key: 'hideCreateCard', value: function hideCreateCard() {
              this.setState({ showModal: false });
            }
          }, {
            key: 'showNextCard', value: function showNextCard() {
              if (this.state.cardNumber + 1 !== this.state.cards.size) {
                this.setState({ cardNumber: this.state.cardNumber += 1 });
              }
            }
          }, {
            key: 'showPrevCard', value: function showPrevCard() {
              if (this.state.cardNumber !== 0) {
                this.setState({ cardNumber: this.state.cardNumber -= 1 });
              }
            }
          }, {
            key: 'setCard', value: function setCard(

              card) {
              var newCards = this.state.cards.push(card);
              this.setState({ cards: newCards });
            }
          }, {
            key: 'generateDots', value: function generateDots() {
              var _this7 = this;
              var times = this.state.cards.size;
              var arr = [];
              _.times(times).forEach(function (num) {
                var dotClass = num === _this7.state.cardNumber ? 'active' : '';
                arr.push(
                  React.createElement('span', {
                    className: 'card-container__dot fa fa-circle ' + dotClass,
                    onClick: function onClick() { return _this7.setState({ cardNumber: num }); }
                  }));


              });
              return arr;
            }
          }, {
            key: 'generateCards', value: function generateCards() {
              var _this8 = this;
              var cards = this.state.cards;
              var cardsList = cards.map(function (card) {
                return (
                  React.createElement(Card, {
                    frontContent: card.get('word'),
                    backContent: card.get('description'),
                    showNextCard: _this8.boundShowNextCard,
                    showPrevCard: _this8.boundShowPrevCard,
                    cardNumber: _this8.state.cardNumber
                  }));


              });
              return cardsList.toJS()[this.state.cardNumber];
            }
          }, {
            key: 'render', value: function render() {
              var _this9 = this;
              return (
                React.createElement('div', null,
                  React.createElement('span', {
                    className: 'card-container__icon  fa fa-plus',
                    onClick: function onClick() {
                      _this9.setState({ showModal: !_this9.state.showModal });
                    }
                  }),

                  this.state.showModal ?
                    React.createElement(CreateCard, {
                      onShadowClick: this.boundCallback,
                      onCreateCard: this.boundCreateCard
                    }) :

                    '',
                  this.generateCards(),
                  React.createElement('div', { className: 'card-container__dots-wrapper' },
                  )));
                  // TODO: Re-enable the dots after sorting out the UI issues with a lot of cards
              /*React.createElement('div', { className: 'card-container__dots-wrapper' },
                this.generateDots())));*/



            }
          }]); return CardContainer;
        }(React.Component); var


          Main = function (_React$Component5) {
            _inherits(Main, _React$Component5); function Main() { _classCallCheck(this, Main); return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments)); } _createClass(Main, [{
              key: 'render', value: function render() {
                return (
                  React.createElement('div', { className: 'wrapper' },
                    React.createElement(Header, null),
                    React.createElement('div', { className: 'content-wrapper' },
                      React.createElement(CardContainer, null))));



              }
            }]); return Main;
          }(React.Component);


ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));