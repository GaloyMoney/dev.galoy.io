---
description: For people new to GaloyMoney, this page will point you in the right direction.
---

# Getting Started

{% hint style="info" %}
**Tip:** [Join the Galoy Slack](https://join.slack.com/t/galoymoney-workspace/shared\_invite/zt-rvnhsdb5-72AZCD\_jzw6\_Q05aCs0SgA) and say hello in #general – there's a community of devs happy to help you get up and running.
{% endhint %}

### Setting up a new instance on GaloyMoney

1. Step 1
2. Step 2

### Adding and onboarding admins to a new instance

1. Step 1
2. Step 2

### How to implement a KYC option?

KYC is not built into the core banking platform.

### Troubleshooting issues

Join us on slack.

## \[placeholder] Install the library

The best way to interact with our API is to use one of our official libraries:

{% tabs %}
{% tab title="Node" %}
```
# Install via NPM
npm install --save my-api
```
{% endtab %}

{% tab title="Python" %}
```
# Install via pip
pip install --upgrade myapi
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**Good to know:** Using tabs to separate out different languages is a great way to present technical examples or code documentation without cramming your docs with extra sections or pages per language.
{% endhint %}

## \[placeholder] Make your first request

To make your first request, send an authenticated request to the pets endpoint. This will create a `pet`, which is nice.

{% swagger baseUrl="https://api.myapi.com/v1" method="post" path="/pet" summary="Create pet." %}
{% swagger-description %}
Creates a new pet.
{% endswagger-description %}

{% swagger-parameter in="body" name="name" required="true" type="string" %}
The name of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="owner_id" required="false" type="string" %}
The

`id`

of the user who owns the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="species" required="false" type="string" %}
The species of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="breed" required="false" type="string" %}
The breed of the pet
{% endswagger-parameter %}

{% swagger-response status="200" description="Pet successfully created" %}
```javascript
{
    "name"="Wilson",
    "owner": {
        "id": "sha7891bikojbkreuy",
        "name": "Samuel Passet",
    "species": "Dog",}
    "breed": "Golden Retriever",
}
```
{% endswagger-response %}

{% swagger-response status="401" description="Permission denied" %}

{% endswagger-response %}
{% endswagger %}

{% hint style="info" %}
**Good to know:** You can use the API Method block to fully document an API method. You can also sync your API blocks with an OpenAPI file or URL to auto-populate them.
{% endhint %}

Take a look at how you might call this method using our official libraries, or via `curl`:

{% tabs %}
{% tab title="curl" %}
```
curl https://api.myapi.com/v1/pet  
    -u YOUR_API_KEY:  
    -d name='Wilson'  
    -d species='dog'  
    -d owner_id='sha7891bikojbkreuy'  
```
{% endtab %}

{% tab title="Node" %}
```javascript
// require the myapi module and set it up with your API key
const myapi = require('myapi')(YOUR_API_KEY);

const newPet = away myapi.pet.create({
    name: 'Wilson',
    owner_id: 'sha7891bikojbkreuy',
    species: 'Dog',
    breed: 'Golden Retriever',
})
```
{% endtab %}

{% tab title="Python" %}
```python
// Set your API key before making the request
myapi.api_key = YOUR_API_KEY

myapi.Pet.create(
    name='Wilson',
    owner_id='sha7891bikojbkreuy',
    species='Dog',
    breed='Golden Retriever',
)
```
{% endtab %}
{% endtabs %}
