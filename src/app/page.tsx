import Image from "next/image";
import NavBar from "./components/nav-bar";
import Banner from "./components/banner";
import TabButton from "./components/tab-btn";
import PostCard from "./components/post-card";

export default function Home() {
  const categories = [
    {
      'id': 1,
      'title': 'Education'
    },
    {
      'id': 2,
      'title': 'Entertainment'
    }
  ]

  const posts = [
    {
      'id': 1,
      'title': 'Vermipura Earthwork Station',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac justo ut ante mattis fringilla nec quis elit. Nulla a nisl sed neque dictum mattis. Suspendisse vitae semper arcu, eu auctor ante. Maecenas gravida neque nec lorem feugiat, sit amet viverra massa malesuada. Sed varius urna ac lacinia eleifend. Aliquam viverra dapibus ex convallis hendrerit. Aliquam rutrum, lorem vel ornare finibus, lorem est vulputate enim, quis faucibus urna dui at erat. Aliquam eget consequat dui, vel tristique nulla. Aliquam feugiat sed diam eget blandit. Nam enim sem, facilisis ut enim ac, viverra semper massa. Quisque eu mattis augue. Morbi ut sapien sed enim suscipit eleifend non non metus. Nullam ornare laoreet ligula, nec condimentum nunc. Sed vulputate lacinia elementum. Quisque molestie sapien ut ante venenatis, ut ultrices erat rhoncus. Cras elit ipsum, lacinia in consectetur vel, dapibus sit amet lacus. Integer sit amet elit condimentum, dictum quam commodo, tristique elit. Mauris at lorem quam. Ut ut bibendum massa, pretium vulputate ex. Mauris tincidunt nibh sit amet libero rutrum tincidunt. Maecenas molestie nunc nec sem fermentum, non aliquam lectus varius. Sed lacinia mattis purus, sed dignissim magna accumsan sit amet. Nulla dictum dui eget augue lacinia porttitor. Sed ultricies lectus quis suscipit vulputate. Curabitur dignissim dictum ex a ultrices. In vestibulum risus in consectetur commodo. Fusce enim nisi, luctus nec ultrices nec, lobortis nec erat. Nunc euismod, sem eu lacinia dictum, sem mi vestibulum ipsum, sed egestas augue justo quis sem. Nunc vitae tortor leo. Donec eget velit vitae purus consectetur rutrum. Praesent lorem turpis, elementum sit amet nibh vitae, volutpat ultricies lectus. Etiam id convallis turpis. Donec ac dapibus quam, non volutpat mauris. Nullam dapibus ullamcorper nulla ut malesuada. Integer aliquet enim nec urna rutrum volutpat. Aliquam erat volutpat. Aenean rutrum orci eget porta congue. Pellentesque in tincidunt nulla. Suspendisse eget est ligula.',
      'category_id': 1,
      'image': 'https://iuaebnn2tq.ufs.sh/f/fK77oCV0oDH7vemHTQsj0U4hVRWEf1PQCBDtgIGAO8o3c7v9'
    },
    {
      'id': 2,
      'title': 'Something is cooking',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac justo ut ante mattis fringilla nec quis elit. Nulla a nisl sed neque dictum mattis. Suspendisse vitae semper arcu, eu auctor ante. Maecenas gravida neque nec lorem feugiat, sit amet viverra massa malesuada. Sed varius urna ac lacinia eleifend. Aliquam viverra dapibus ex convallis hendrerit. Aliquam rutrum, lorem vel ornare finibus, lorem est vulputate enim, quis faucibus urna dui at erat. Aliquam eget consequat dui, vel tristique nulla. Aliquam feugiat sed diam eget blandit. Nam enim sem, facilisis ut enim ac, viverra semper massa. Quisque eu mattis augue. Morbi ut sapien sed enim suscipit eleifend non non metus. Nullam ornare laoreet ligula, nec condimentum nunc. Sed vulputate lacinia elementum. Quisque molestie sapien ut ante venenatis, ut ultrices erat rhoncus. Cras elit ipsum, lacinia in consectetur vel, dapibus sit amet lacus. Integer sit amet elit condimentum, dictum quam commodo, tristique elit. Mauris at lorem quam. Ut ut bibendum massa, pretium vulputate ex. Mauris tincidunt nibh sit amet libero rutrum tincidunt. Maecenas molestie nunc nec sem fermentum, non aliquam lectus varius. Sed lacinia mattis purus, sed dignissim magna accumsan sit amet. Nulla dictum dui eget augue lacinia porttitor. Sed ultricies lectus quis suscipit vulputate. Curabitur dignissim dictum ex a ultrices. In vestibulum risus in consectetur commodo. Fusce enim nisi, luctus nec ultrices nec, lobortis nec erat. Nunc euismod, sem eu lacinia dictum, sem mi vestibulum ipsum, sed egestas augue justo quis sem. Nunc vitae tortor leo. Donec eget velit vitae purus consectetur rutrum. Praesent lorem turpis, elementum sit amet nibh vitae, volutpat ultricies lectus. Etiam id convallis turpis. Donec ac dapibus quam, non volutpat mauris. Nullam dapibus ullamcorper nulla ut malesuada. Integer aliquet enim nec urna rutrum volutpat. Aliquam erat volutpat. Aenean rutrum orci eget porta congue. Pellentesque in tincidunt nulla. Suspendisse eget est ligula.',
      'category_id': 2,
      'image': 'https://iuaebnn2tq.ufs.sh/f/fK77oCV0oDH7SeYQieSHvjlH9YNQO3krCnIzP158duyiMD4E'
    },
    {
      'id': 3,
      'title': 'What do you do?',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac justo ut ante mattis fringilla nec quis elit. Nulla a nisl sed neque dictum mattis. Suspendisse vitae semper arcu, eu auctor ante. Maecenas gravida neque nec lorem feugiat, sit amet viverra massa malesuada. Sed varius urna ac lacinia eleifend. Aliquam viverra dapibus ex convallis hendrerit. Aliquam rutrum, lorem vel ornare finibus, lorem est vulputate enim, quis faucibus urna dui at erat. Aliquam eget consequat dui, vel tristique nulla. Aliquam feugiat sed diam eget blandit. Nam enim sem, facilisis ut enim ac, viverra semper massa. Quisque eu mattis augue. Morbi ut sapien sed enim suscipit eleifend non non metus. Nullam ornare laoreet ligula, nec condimentum nunc. Sed vulputate lacinia elementum. Quisque molestie sapien ut ante venenatis, ut ultrices erat rhoncus. Cras elit ipsum, lacinia in consectetur vel, dapibus sit amet lacus. Integer sit amet elit condimentum, dictum quam commodo, tristique elit. Mauris at lorem quam. Ut ut bibendum massa, pretium vulputate ex. Mauris tincidunt nibh sit amet libero rutrum tincidunt. Maecenas molestie nunc nec sem fermentum, non aliquam lectus varius. Sed lacinia mattis purus, sed dignissim magna accumsan sit amet. Nulla dictum dui eget augue lacinia porttitor. Sed ultricies lectus quis suscipit vulputate. Curabitur dignissim dictum ex a ultrices. In vestibulum risus in consectetur commodo. Fusce enim nisi, luctus nec ultrices nec, lobortis nec erat. Nunc euismod, sem eu lacinia dictum, sem mi vestibulum ipsum, sed egestas augue justo quis sem. Nunc vitae tortor leo. Donec eget velit vitae purus consectetur rutrum. Praesent lorem turpis, elementum sit amet nibh vitae, volutpat ultricies lectus. Etiam id convallis turpis. Donec ac dapibus quam, non volutpat mauris. Nullam dapibus ullamcorper nulla ut malesuada. Integer aliquet enim nec urna rutrum volutpat. Aliquam erat volutpat. Aenean rutrum orci eget porta congue. Pellentesque in tincidunt nulla. Suspendisse eget est ligula.',
      'category_id': 2,
      'image': 'https://iuaebnn2tq.ufs.sh/f/fK77oCV0oDH7vxBMK1sj0U4hVRWEf1PQCBDtgIGAO8o3c7v9'
    },
  ]
  return (
    <div className="px-10 py-5 flex flex-col gap-10">
      {/* Tab Group */}
      <div className="flex flex-row gap-10 justify-center">
        <TabButton key={0} title="All"/>

        {categories.map(category => (
          <TabButton key={category.id} title={category.title}/>
        ))}
      </div>

      {/* Posts */}
      <div className="grid grid-cols-3 gap-10">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
