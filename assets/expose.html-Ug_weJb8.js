import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as c}from"./app-DRadftDd.js";const r={},d=c("<p>格式为 <code>EXPOSE &lt;端口1&gt; [&lt;端口2&gt;...]</code></p><p><code>EXPOSE</code> 指令是声明容器运行时提供服务的端口，这只是一个声明，在容器运行时并不会因为这个声明应用就会开启这个端口的服务。在 <code>Dockerfile</code> 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 <code>docker run -P</code> 时，会自动随机映射 <code>EXPOSE</code> 的端口。</p><p>要将 <code>EXPOSE</code> 和在运行时使用 <code>-p &lt;宿主端口&gt;:&lt;容器端口&gt;</code> 区分开来。<code>-p</code>，是映射宿主端口和容器端口，换句话说，就是将容器的对应端口服务公开给外界访问，而 <code>EXPOSE</code> 仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射。</p>",3),i=[d];function p(n,a){return t(),o("div",null,i)}const m=e(r,[["render",p],["__file","expose.html.vue"]]),g=JSON.parse('{"path":"/docker/dockfile/expose.html","title":"","lang":"zh-CN","frontmatter":{"description":"格式为 EXPOSE <端口1> [<端口2>...] EXPOSE 指令是声明容器运行时提供服务的端口，这只是一个声明，在容器运行时并不会因为这个声明应用就会开启这个端口的服务。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 doc...","head":[["meta",{"property":"og:url","content":"https://leiping520.github.io/docs/docker/dockfile/expose.html"}],["meta",{"property":"og:site_name","content":"悟空"}],["meta",{"property":"og:description","content":"格式为 EXPOSE <端口1> [<端口2>...] EXPOSE 指令是声明容器运行时提供服务的端口，这只是一个声明，在容器运行时并不会因为这个声明应用就会开启这个端口的服务。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 doc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T09:32:12.000Z"}],["meta",{"property":"article:author","content":"George"}],["meta",{"property":"article:modified_time","content":"2024-03-08T09:32:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T09:32:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"George\\",\\"url\\":\\"https://leiping520.github.io/docs/\\"}]}"]]},"headers":[],"git":{"createdTime":1709890332000,"updatedTime":1709890332000,"contributors":[{"name":"George","email":"leiping@yunxianginvest.com","commits":1}]},"readingTime":{"minutes":0.8,"words":239},"filePathRelative":"docker/dockfile/expose.md","localizedDate":"2024年3月8日","excerpt":"<p>格式为 <code>EXPOSE &lt;端口1&gt; [&lt;端口2&gt;...]</code></p>\\n<p><code>EXPOSE</code> 指令是声明容器运行时提供服务的端口，这只是一个声明，在容器运行时并不会因为这个声明应用就会开启这个端口的服务。在 <code>Dockerfile</code> 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 <code>docker run -P</code> 时，会自动随机映射 <code>EXPOSE</code> 的端口。</p>","autoDesc":true}');export{m as comp,g as data};
