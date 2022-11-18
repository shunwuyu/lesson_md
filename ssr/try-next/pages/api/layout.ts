import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ILayoutProps } from "../../components/layout";
import { CMSDOMAIN } from "@/utils";
import { isEmpty } from "lodash";

const getLayoutData = (
    req: NextApiRequest,
    res: NextApiResponse<ILayoutProps>
) => {
    axios.get(`${CMSDOMAIN}/api/layouts`).then((result) => {
        // console.log(result.data, '???//////////');
        const {
            copy_right,
            link_lists,
            public_number,
            qrcode: qrcode,
            // qr_code_image,
            site_number,
            title,
        } = result.data || {};

        // console.log(qrcode.data.image.data[0].url, '|||/////????')
        console.log(`${CMSDOMAIN}${qrcode.data.image.data[0].url}`)
        res.status(200).json({
            navbarData: {},
            footerData: {
                title,
                linkList: link_lists?.data?.map((item: any) => {
                    return {
                        title: item.title,
                        list: item?.links?.data?.map((_item: any) => {
                            return {
                                label: _item.label,
                                link: isEmpty(_item.link) ? "" : _item.link,
                            };
                        }),
                    };
                }),
                qrCode: {
                    image: `${CMSDOMAIN}${qrcode.data.image.data[0].url}`,
                    // image: ``,
                    text: qrcode.data.text,
                },
                copyRight: copy_right,
                siteNumber: site_number,
                publicNumber: public_number,
            },
        });
    });
};

export default getLayoutData;