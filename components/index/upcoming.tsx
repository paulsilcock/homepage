import { PostPreview } from "./postpreview";

export const Upcoming: React.FC = () => (
  <>
    <h3 id="upcoming">
      Upcoming Posts
    </h3>
    <p>
      My first articles should be available in the next few weeks, in the
      meantime watch this space...
    </p>
    <div className="flex flex-col justify-items-stretch md:flex-row items-start py-3 gap-4">
      <PostPreview
        title="DVC pipelines in Argo Workflows"
        slug="Automatically scale your machine learning pipelines in Kubernetes with GitHub Actions"
        className="bg-gradient-to-tr from-[#6EE7B7] to-[#9333EA]"
      />
      <PostPreview
        title="Auto-deploy pull request changes"
        slug={
          <span>
            Tighten feedback loops and learn some GitOps along the way with ArgoCD
            <code> ApplicationSets</code>
          </span>
        }
        className="bg-gradient-to-br from-[#9333EA] to-[#ffdd6c]"
      />
      <PostPreview
        title="Agile Armageddon"
        slug="It's easier to train astronauts to be oil drillers, than to train oil drillers to be astronauts..."
        className="bg-gradient-to-tr from-[#ffdd6c] to-[#171FFF]"
      />
    </div>
  </>
)