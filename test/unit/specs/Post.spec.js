import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  const link = 'http://google.md'
  const createComponent = () => {
    const PostContructor = Vue.extend(Post)
    const comp = new PostContructor({
      propsData: {
        link
      }
    }).$mount()

    return comp
  }

  it('should render the link', () => {
    const comp = createComponent()

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal(link)
  })

  it('should update element\' href when property link changes', (done) => {
    const newLink = 'http://point.md'
    const comp = createComponent()
    comp.link = newLink
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal(newLink)
      done()
    })
  })
})
