// import global components
import NavBarBetween from '../../globals/components/NavBarBetween'
import PageFull from '../../globals/components/PageFull'
// import global utilities
import GoogleIcon from '../../globals/utilities/GoogleIcon'
// import local utilites
import CategoryLabel from '../utilities/CategoryLabel'

export default function NoteDetail() {
  return (
    <>
      <PageFull bg="bg-iconbrown">
        <NavBarBetween>
          <GoogleIcon className="text-2xl" label="keyboard_arrow_left" />
          <h1 className="text-xl font-bold ">Details</h1>
          <GoogleIcon className="text-2xl" label="edit" />
        </NavBarBetween>

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Check out that new cafe</h1>
          <CategoryLabel label="coding" />
        </div>

        <div className="overflow-y-scroll">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            harum corporis, aperiam doloremque, voluptate, magnam neque quos hic
            nulla facilis temporibus explicabo id eligendi numquam possimus
            omnis? Fugiat, vel. Cum eius dolorum, optio quidem beatae ullam
            obcaecati laborum consectetur officiis quis, qui praesentium veniam
            nisi cumque nobis. Enim velit molestiae doloremque? Eligendi,
            accusantium nesciunt aliquam deserunt corrupti, assumenda maiores
            hic quod dolorum, est sit illum. Harum minus obcaecati rem totam
            dolor ex illum aspernatur, ratione accusantium deserunt nesciunt
            officiis reiciendis! Quas, inventore repellat nulla possimus quaerat
            rem, aut sit modi minus expedita, doloribus deserunt quam? Provident
            iusto placeat ab et ex. Odio in magnam atque iusto distinctio veniam
            voluptatibus alias aliquid! Delectus dolorem facilis quidem
            blanditiis voluptatum sunt quia nulla dolores tenetur, enim,
            accusantium iusto ad ab alias? Pariatur alias, quidem nostrum
            laboriosam distinctio nobis modi, repellat neque, qui illum
            excepturi placeat quam facilis odit voluptatum obcaecati eius
            consectetur delectus! Consequatur esse repudiandae tempora,
            accusamus sed illum quibusdam at velit consectetur pariatur sapiente
            expedita quam! Impedit nam omnis deserunt voluptates. Porro nobis,
            eaque voluptatum quae ullam earum nihil perferendis delectus
            molestiae, et nesciunt tempora eos minus est ducimus consequuntur,
            aut deserunt. Sapiente aperiam accusantium sequi quos suscipit
            similique nostrum, maiores soluta provident quae repudiandae magni?
            Commodi blanditiis architecto fugiat dolore earum assumenda quod
            nulla quis animi. Veritatis debitis, accusantium tenetur,
            consequatur rem minus iste enim sit laudantium harum vitae ipsum et
            earum, eius omnis! Eum voluptatem libero mollitia aspernatur
            inventore. Delectus fugiat earum dolorem error? Hic delectus
            similique dolor dolorem in fuga tempore repudiandae incidunt,
            accusantium libero officiis eveniet at non molestiae reprehenderit
            minus aperiam magni! Minus modi ex, excepturi nisi quasi quam
            placeat illum incidunt harum rem ad quo dolore ducimus, dolorum
            totam omnis delectus doloribus voluptatum. Tempora, autem quaerat. A
            provident vero natus fugit debitis, voluptatibus perferendis. Iste.
          </p>
        </div>
      </PageFull>
    </>
  )
}
