import Layout from '../../../components/layout'

export default ({children,location}) => (
  <Layout>
    <h1>My Layout {location.pathname}</h1>
    <div>{children}</div>
  </Layout>
)

# h1 header

## h2 header

### h3 header


Example of a paragrapgh. Example of *Italic*, **Bold**, and `Monospace`.

Example of unordered list:

  * First
  * Second
  * Thirds

~~~
//Code example
define foobar() {
    print "Apurav Chauhan";
}
~~~