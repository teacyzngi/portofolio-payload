import { getPayloadClient } from '../../../src/payloadClient'

export default async function PapersPage() {
  const payload = await getPayloadClient()
  const papers = await payload.find({
    collection: 'papers',
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Papers</h1>
      <div className="grid gap-6">
        {papers.docs.map((paper) => (
          <div key={paper.id} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
            {paper.authors && (
              <p className="text-gray-600 mb-2">Authors: {paper.authors}</p>
            )}
            {paper.abstract && (
              <p className="text-gray-700 mb-4">{paper.abstract}</p>
            )}
            {paper.publicationDate && (
              <p className="text-sm text-gray-500 mb-2">
                Published: {new Date(paper.publicationDate).toLocaleDateString()}
              </p>
            )}
            {paper.url && (
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Paper
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
